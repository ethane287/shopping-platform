#!/usr/bin/env node

const fs = require('fs');

// 获取命令行参数
const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('用法: node clean-zhipu-output.js <file>');
  process.exit(1);
}

const inputFile = args[0];

// 检查文件是否存在
if (!fs.existsSync(inputFile)) {
  console.error(`文件不存在: ${inputFile}`);
  process.exit(1);
}

try {
  // 读取文件内容
  let content = fs.readFileSync(inputFile, 'utf-8');
  
  // 寻找代码块标记并提取其中的内容
  const codeBlockRegex = /\`\`\`(jsx|javascript|js|react)?\s*([\s\S]*?)\`\`\`/;
  const match = content.match(codeBlockRegex);
  
  if (match && match[2]) {
    // 提取代码块中的内容
    let cleanedCode = match[2].trim();
    fs.writeFileSync(inputFile, cleanedCode, 'utf-8');
    console.log(`✅ 已清理文件: ${inputFile}`);
  } else {
    console.log('未找到代码块，文件保持不变');
  }
  
} catch (error) {
  console.error(`❌ 清理文件时出错: ${error.message}`);
  process.exit(1);
}