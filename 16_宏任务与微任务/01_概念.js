// JS是单线程的

// 宏任务
setTimeout(() => {
  console.log('定时器')
}, 0);

// 微任务
Promise.resolve().then(value => {
  console.log('Promise');
})

console.log('后盾人')

// 先执行微任务,后执行宏任务
// 所以输出规则如下: 后盾人 => Promise => 定时器