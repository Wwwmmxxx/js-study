// 同步任务 > 微任务 > 宏任务

new Promise((resolve, reject) => {
  // 此处的console.log为主线程 => 第一优先级
  console.log('promise')
  resolve();
}).then(value => {
  // 此处的console.log为微任务队列 => 第二优先级
  console.log('Promise then');
})

// 把serTimeout放到准备执行的状态 => 第三优先级
setTimeout(() => {
  console.log('setTimeout');
}, 0);

// 主线程  => 优先级最高
console.log('后盾人')
