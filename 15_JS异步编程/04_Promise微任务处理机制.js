// 此时为Pending状态 => 准备阶段
new Promise((resolve, reject) => {
  resolve('成功状态'); // 调用了Resolve函数后, 此时为resolve状态 => 成功状态
  // reject('拒绝状态'); // 调用了reject函数后, 此时为rejectes状态 => 拒绝状态 
}).then(value => {
  console.log('成功的业务处理1');
}, reason => {
  console.log('拒绝的业务处理2');
}).then(value => {
  console.log('成功的业务处理2')
}, reason => {
  console.log('拒绝的业务处理2');
});

// Promise是处于微任务队列 => 有任务后执行

// 其余的为宏任务队列 => 有任务先执行