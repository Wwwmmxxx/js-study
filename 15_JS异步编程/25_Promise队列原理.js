// 必须等待上一个Promise完成之后,再继续执行
let promise = Promise.resolve('后盾人');

promise = promise.then(v => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('1');
      resolve();
    }, 1000);
  })
});

// 下面的promise.then需要等待上一个promise的状态发生改变后执行
promise.then(v => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('2');
      resolve();
    }, 1000);
  })
})