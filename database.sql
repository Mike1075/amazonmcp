-- 产品表
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  category TEXT,
  image_url TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- 价格记录表
CREATE TABLE IF NOT EXISTS price_records (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  platform TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  currency TEXT DEFAULT 'USD',
  availability BOOLEAN DEFAULT true,
  url TEXT NOT NULL,
  scraped_at TIMESTAMP DEFAULT NOW()
);

-- 创建索引以提高查询性能
CREATE INDEX IF NOT EXISTS idx_price_records_product_id ON price_records(product_id);
CREATE INDEX IF NOT EXISTS idx_price_records_platform ON price_records(platform);
CREATE INDEX IF NOT EXISTS idx_price_records_scraped_at ON price_records(scraped_at);

-- 插入一些示例数据进行测试
INSERT INTO products (name, description, category, image_url) VALUES 
('iPhone 15 Pro', 'Latest iPhone with advanced camera system', 'Electronics', 'https://images.unsplash.com/photo-1592179900578-87825afdeabc?w=300'),
('MacBook Pro M3', 'Professional laptop with M3 chip', 'Electronics', 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300'),
('AirPods Pro', 'Wireless earbuds with noise cancellation', 'Electronics', 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=300')
ON CONFLICT DO NOTHING; 