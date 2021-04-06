let p1 = new Promise((resolve, reject) => {
  resolve('fail');
}).then(
  value => {
    console.log(value);
    return 'houdunren'
  },
  reason => console.log('error:' + error)
).then(value => {
  // 接受了上一个then的返回值'houdunren'
  console.log(value);
})

console.log('------------------------------')

let p2 = new Promise((resolve, reject) => {
  resolve('fail');
}).then(
  value => {
    // 这里必须return出来 , 如果不return出来,则是对then的处理
    return new Promise((resolve,reject)=>{
      resolve('解决了')
    })
  },
  reason => console.log('error:' + error)
).then(value => {
  // 接受了上一个then的返回值'houdunren'
  // 后面的then永远是对上一个返回的Promise的处理
  console.log(value);
})