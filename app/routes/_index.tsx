import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useLoaderData, useNavigation } from "@remix-run/react";
import { useState } from "react";
import { supabase, type Product, type PriceRecord } from "~/lib/supabase";

export const meta: MetaFunction = () => {
  return [
    { title: "智能比价神器 - 多平台商品价格对比" },
    { name: "description", content: "一键搜索，多平台比价，帮您找到最优惠的价格" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q");
  const scrape = url.searchParams.get("scrape"); // 新参数：是否需要抓取

  let products: (Product & { price_records: PriceRecord[] })[] = [];
  let scrapeResults = null;

  if (query) {
    // 如果需要抓取新数据
    if (scrape === "true") {
      try {
        // 调用价格抓取API
        const formData = new FormData();
        formData.append('query', query);
        const scrapeResponse = await fetch(`${url.origin}/api/scrape`, {
          method: 'POST',
          body: formData,
        });
        
        if (scrapeResponse.ok) {
          scrapeResults = await scrapeResponse.json();
          console.log('价格抓取成功:', scrapeResults);
        }
      } catch (error) {
        console.error('调用抓取API失败:', error);
      }
    }

    // 搜索产品和价格记录（包括新抓取的数据）
    const { data, error } = await supabase
      .from('products')
      .select(`
        *,
        price_records (*)
      `)
      .ilike('name', `%${query}%`)
      .order('created_at', { ascending: false });

    if (!error && data) {
      products = data;
    }
  } else {
    // 获取最新产品
    const { data, error } = await supabase
      .from('products')
      .select(`
        *,
        price_records (*)
      `)
      .order('created_at', { ascending: false })
      .limit(10);

    if (!error && data) {
      products = data;
    }
  }

  return json({ 
    products, 
    query, 
    scrapeResults,
    total: products.length 
  });
}

export default function Index() {
  const { products, query, scrapeResults, total } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const isSearching = navigation.state === "submitting";

  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  const platforms = ['amazon', 'walmart', 'ebay', 'target'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* 页头 */}
        <header className="text-center mb-16 pt-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            🛒 智能比价神器
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            一键搜索，多平台比价，帮您找到最优惠的价格
          </p>
        </header>

        {/* 搜索区域 */}
        <div className="max-w-4xl mx-auto mb-16 px-4">
          <Form method="get" className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  name="q"
                  type="text"
                  placeholder="输入产品名称，如：iPhone、MacBook、AirPods..."
                  defaultValue={query || ""}
                  className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>
              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={isSearching}
                  className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSearching ? "搜索中..." : "🔍 搜索"}
                </button>
                <button
                  type="submit"
                  name="scrape"
                  value="true"
                  disabled={isSearching}
                  className="px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSearching ? "抓取中..." : "⚡ 立即抓取"}
                </button>
              </div>
            </div>
          </Form>

          {/* 使用提示 */}
          {!query && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-sm font-medium text-blue-800 mb-1">使用指南</h3>
                  <p className="text-sm text-blue-700">
                    <strong>搜索</strong>：查看数据库中已有的价格数据<br/>
                    <strong>立即抓取</strong>：从各大电商平台获取最新实时价格（推荐）
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 平台筛选 */}
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-gray-600 mr-2">平台筛选:</span>
            {platforms.map((platform) => (
              <button
                key={platform}
                type="button"
                onClick={() => {
                  setSelectedPlatforms(prev =>
                    prev.includes(platform)
                      ? prev.filter(p => p !== platform)
                      : [...prev, platform]
                  );
                }}
                className={`px-3 py-1 text-sm rounded-full border ${
                  selectedPlatforms.includes(platform)
                    ? 'bg-blue-100 border-blue-300 text-blue-700'
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {platform.charAt(0).toUpperCase() + platform.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* 抓取结果状态 */}
        {scrapeResults && (
          <div className="max-w-6xl mx-auto mb-6">
            <div className={`p-4 rounded-lg ${scrapeResults.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
              <div className="flex items-center">
                {scrapeResults.success ? (
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
                <span className={`font-medium ${scrapeResults.success ? 'text-green-800' : 'text-red-800'}`}>
                  {scrapeResults.success ? '✅ 价格抓取成功！' : '❌ 价格抓取失败'}
                </span>
              </div>
              <p className={`mt-1 text-sm ${scrapeResults.success ? 'text-green-700' : 'text-red-700'}`}>
                {scrapeResults.message || scrapeResults.error}
              </p>
              {scrapeResults.success && scrapeResults.total_saved && (
                <p className="mt-1 text-sm text-green-600">
                  成功保存 {scrapeResults.total_saved} 个产品的价格数据
                </p>
              )}
            </div>
          </div>
        )}

        {/* 搜索结果 */}
        <div className="max-w-6xl mx-auto">
          {query && (
            <h2 className="text-2xl font-semibold mb-6">
              搜索结果: "{query}" ({products.length} 个产品)
            </h2>
          )}

          {!query && (
            <h2 className="text-2xl font-semibold mb-6">
              热门产品
            </h2>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {products.length === 0 && query && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                没有找到相关产品，请尝试其他关键词
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface ProductCardProps {
  product: Product & { price_records: PriceRecord[] };
}

function ProductCard({ product }: ProductCardProps) {
  const prices = product.price_records.sort((a, b) => a.price - b.price);
  const bestPrice = prices[0];
  const priceRange = prices.length > 1 ? `$${bestPrice.price} - $${prices[prices.length - 1].price}` : `$${bestPrice?.price || 'N/A'}`;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={product.image_url || 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300'}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-green-600">{priceRange}</span>
            <span className="text-sm text-gray-500">{prices.length} 个平台</span>
          </div>
          
          {prices.length > 0 && (
            <div className="space-y-1">
              {prices.slice(0, 3).map((price, index) => (
                <div key={price.id} className="flex justify-between text-sm">
                  <span className="capitalize font-medium">{price.platform}</span>
                  <div className="flex items-center gap-2">
                    <span className={index === 0 ? 'text-green-600 font-semibold' : 'text-gray-600'}>
                      ${price.price}
                    </span>
                    {index === 0 && <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">最低价</span>}
                  </div>
                </div>
              ))}
              {prices.length > 3 && (
                <div className="text-xs text-gray-500 text-center">
                  +{prices.length - 3} 更多平台
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
