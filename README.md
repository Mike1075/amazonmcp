# 🛒 智能比价神器 

一个基于 Remix + Supabase + Bright Data 的智能电商比价平台，帮您找到最优惠的价格。

## ✨ 核心功能

- 🔍 **智能搜索**: 一键搜索，秒级响应
- 🏪 **多平台比价**: Amazon、Walmart、eBay、Target 等主流平台
- 💰 **实时价格**: 自动抓取最新价格数据  
- 📊 **价格对比**: 清晰展示最低价和价格区间
- 📱 **响应式设计**: 支持移动端和桌面端

## 🚀 技术栈

- **前端**: Remix + React + TypeScript + Tailwind CSS
- **后端**: Supabase (PostgreSQL + Edge Functions)
- **数据抓取**: Bright Data MCP + Amazon Product Search MCP
- **部署**: Netlify (前端) + Supabase (后端)

## 🛠️ 本地开发

### 1. 环境配置

```bash
# 克隆项目
git clone https://github.com/Mike1075/amazonmcp.git
cd amazonmcp

# 安装依赖
npm install

# 配置环境变量
cp .env.example .env
```

### 2. 数据库设置

在 Supabase 中执行 `database.sql` 文件创建表结构：

```sql
-- 在 Supabase SQL Editor 中运行
-- 详见 database.sql 文件
```

### 3. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:5173

## 📦 部署到 Netlify

1. 连接 GitHub 仓库到 Netlify
2. 设置构建命令: `npm run build`
3. 设置发布目录: `build/client`
4. 配置环境变量:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`

## 🔧 项目结构

```
app/
├── lib/
│   └── supabase.ts          # Supabase 客户端配置
├── routes/
│   ├── _index.tsx           # 主页面 (搜索 + 比价展示)
│   └── api.scrape.ts        # 价格抓取 API
├── tailwind.css             # 样式配置
└── root.tsx                 # 应用根组件

database.sql                 # 数据库表结构
```

## 📝 API 接口

### 价格抓取接口

```
POST /api/scrape
Content-Type: application/x-www-form-urlencoded

query=iPhone 15
```

## 🎯 MVP 功能清单

- [x] 基础项目搭建 (Remix + Tailwind)
- [x] Supabase 数据库配置
- [x] 产品搜索页面
- [x] 价格抓取模拟 API
- [x] 比价展示组件
- [x] 响应式样式设计

## 🔮 下一步计划

- [ ] 集成真实的 Bright Data MCP
- [ ] 添加用户认证系统
- [ ] 实现价格历史图表
- [ ] 添加价格提醒功能
- [ ] 优化搜索算法
- [ ] 添加用户收藏功能

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## �� 许可证

MIT License
