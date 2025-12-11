#!/usr/bin/env node

/**
 * 生成纯净代码的工具脚本
 * 过滤掉智谱AI生成的说明文字，只保留实际的代码
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// 获取命令行参数
const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('用法: node generate-clean-code.js "<prompt>" <output-file>');
  process.exit(1);
}

const prompt = args[0];
const outputFile = args[1];

console.log('正在使用智谱AI生成代码...');

try {
  // 调用claude.js生成代码
  const result = execSync(`node /Users/mac/Claude\\ code/claude-simple/claude.js generate "${prompt}"`, {
    encoding: 'utf-8',
    cwd: '/Users/mac/Claude code/claude-simple'
  });

  // 过滤掉说明文字，只保留代码部分
  // 查找代码块标记
  const codeBlockStart = result.indexOf('```');
  const codeBlockEnd = result.lastIndexOf('```');
  
  let cleanCode;
  if (codeBlockStart !== -1 && codeBlockEnd !== -1 && codeBlockEnd > codeBlockStart) {
    // 提取代码块内容
    cleanCode = result.substring(codeBlockStart + 3, codeBlockEnd);
    
    // 移除可能的语言标识（如jsx、javascript等）
    const firstLineEnd = cleanCode.indexOf('\n');
    if (firstLineEnd !== -1) {
      const firstLine = cleanCode.substring(0, firstLineEnd).trim();
      if (firstLine.match(/^(jsx|javascript|js|react)/i)) {
        cleanCode = cleanCode.substring(firstLineEnd + 1);
      }
    }
  } else {
    // 如果没有找到代码块标记，尝试其他过滤方法
    cleanCode = result
      .split('\n')
      .filter(line => !line.includes('智谱AI') && !line.includes('使用') && !line.trim().startsWith('#'))
      .join('\n');
  }

  // 确保输出目录存在
  const outputDir = path.dirname(outputFile);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // 写入文件
  fs.writeFileSync(outputFile, cleanCode.trim(), 'utf-8');
  console.log(`✅ 代码已生成并保存到 ${outputFile}`);

} catch (error) {
  console.error('❌ 生成代码时出错:', error.message);
  process.exit(1);
}