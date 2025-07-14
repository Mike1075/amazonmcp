#!/bin/bash

echo "🚀 智能比价神器 - 快速部署脚本"
echo "==============================="

# 检查是否有未提交的改动
if [ -n "$(git status --porcelain)" ]; then
  echo "📝 发现未提交的改动，正在提交..."
  git add .
  git commit -m "✨ 完成智能比价平台MVP: Remix + Supabase + 比价功能"
else
  echo "✅ 没有新的改动需要提交"
fi

# 推送到GitHub
echo "📤 推送到GitHub..."
git push origin main

echo ""
echo "🎉 部署完成！"
echo ""
echo "📋 下一步操作："
echo "1. 访问 https://app.netlify.com"
echo "2. 连接你的 GitHub 仓库: https://github.com/Mike1075/amazonmcp.git"
echo "3. 设置构建配置:"
echo "   - Build command: npm run build"
echo "   - Publish directory: build/client"
echo "4. 在 Supabase SQL Editor 中运行 database.sql"
echo "5. 配置环境变量:"
echo "   - SUPABASE_URL=${SUPABASE_URL}"
echo "   - SUPABASE_ANON_KEY=${SUPABASE_ANON_KEY}"
echo ""
echo "�� 你的智能比价平台已经准备就绪！" 