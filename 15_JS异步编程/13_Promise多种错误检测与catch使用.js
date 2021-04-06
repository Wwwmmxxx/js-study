new Promise((resolve, reject) => {
  // 1.可以返回一个自定义的错误
  // reject(new Error('promise fail'))
  // 2.直接抛出一个错误,也会递交给reason方法
  // throw new Error('fail');
  // 3.如果代码本身有其他错误,那么系统会自动抛出异常
  // hd +1;
  // reject('rejected');
  resolve('fulfilled')
}).then(
  value => {
    return new Promise((resolve, reject) => {
      reject('p2')
    })
  },
  reason => console.log(reason)
).then(
  value => {
    console.log(value)
  },
  reason => {
    console.log(reason)
  }
).catch(error => {
  // 1.在catch()方法中可以对错误的进行统一处理
  // 2.位置可以任意放,但会影响处理的顺序,一般我们会把catch放到最后
  // 3.如果catch之前有错误的回调,那么执行错误的回调,如果没有就执行catch
})