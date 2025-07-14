import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { supabase } from "~/lib/supabase";

// 模拟 Bright Data 抓取结果（真实项目中会调用实际的MCP工具）
interface ScrapeResult {
  platform: string;
  name: string;
  price: number;
  url: string;
  image_url?: string;
  availability: boolean;
}

async function mockScrapeProducts(query: string): Promise<ScrapeResult[]> {
  // 模拟从多个平台抓取数据
  const platforms = ['amazon', 'walmart', 'ebay', 'target'];
  const results: ScrapeResult[] = [];

  for (const platform of platforms) {
    // 模拟价格变化
    const basePrice = Math.floor(Math.random() * 500) + 50;
    const variation = Math.floor(Math.random() * 100) - 50;
    const price = Math.max(basePrice + variation, 10);

    results.push({
      platform,
      name: `${query} - ${platform} Edition`,
      price: parseFloat(price.toFixed(2)),
      url: `https://${platform}.com/product/${query.replace(/\s+/g, '-').toLowerCase()}`,
      image_url: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000000000)}?w=300`,
      availability: Math.random() > 0.2, // 80% 可用性
    });
  }

  return results;
}

export async function action({ request }: ActionFunctionArgs) {
  try {
    const formData = await request.formData();
    const query = formData.get("query") as string;

    if (!query) {
      return json({ error: "缺少搜索关键词" }, { status: 400 });
    }

    // 1. 抓取价格数据
    const scrapeResults = await mockScrapeProducts(query);

    // 2. 保存或更新产品信息到数据库
    for (const result of scrapeResults) {
      // 首先检查产品是否已存在
      let { data: existingProduct } = await supabase
        .from('products')
        .select('id')
        .eq('name', result.name)
        .single();

      let productId: string;

      if (!existingProduct) {
        // 创建新产品
        const { data: newProduct, error: productError } = await supabase
          .from('products')
          .insert({
            name: result.name,
            description: `从 ${result.platform} 获取的 ${query} 产品`,
            category: 'Electronics',
            image_url: result.image_url,
          })
          .select('id')
          .single();

        if (productError || !newProduct) {
          console.error('创建产品失败:', productError);
          continue;
        }

        productId = newProduct.id;
      } else {
        productId = existingProduct.id;
      }

      // 3. 添加价格记录
      const { error: priceError } = await supabase
        .from('price_records')
        .insert({
          product_id: productId,
          platform: result.platform,
          price: result.price,
          currency: 'USD',
          availability: result.availability,
          url: result.url,
        });

      if (priceError) {
        console.error('保存价格记录失败:', priceError);
      }
    }

    return json({ 
      success: true, 
      message: `成功抓取 ${scrapeResults.length} 个平台的价格数据`,
      results: scrapeResults 
    });

  } catch (error) {
    console.error('抓取价格失败:', error);
    return json(
      { error: "抓取价格时发生错误" },
      { status: 500 }
    );
  }
}

// 如果需要GET请求处理搜索建议等
export async function loader() {
  return json({ message: "价格抓取 API" });
} 