function phone(mobile, len = 3) {
  // 使用repeat函数重复输出
  return String(mobile).slice(0, len * -1) + '*'.repeat(len);
}

console.log(phone(98765432101,10))