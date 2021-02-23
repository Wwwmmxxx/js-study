// 这里是宏任务
setTimeout(() => {
  console.log('定时器')
  // 这一块是宏任务后,放到微任务队列的
  new Promise(resolve => {
    // 这里是构造函数,为主线程
    console.log('settime Promise');
    resolve();
  }).then(() => {
    // 这里是微任务
    console.log('settime then')
  });
  setTimeout(()=>{
    console.log('timeout timeout')
  },0)
}, 0);

new Promise(resolve => {
  // 这里是构造函数,为主线程
  console.log('Promise');
  resolve();
}).then(() => {
  // 这里是微任务
  console.log('then')
})

// 这里是主线程
console.log('后盾人')

// 结果输出:Promise => 后盾人 => then => 定时器 => settime Promise => settime then => timeout