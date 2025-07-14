import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 数据库类型定义
export interface Product {
  id: string;
  name: string;
  description?: string;
  category?: string;
  image_url?: string;
  created_at: string;
  updated_at: string;
}

export interface PriceRecord {
  id: string;
  product_id: string;
  platform: string;
  price: number;
  currency: string;
  availability: boolean;
  url: string;
  scraped_at: string;
} 