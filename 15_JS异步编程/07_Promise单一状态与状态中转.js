let p1 = new Promise((resolve,reject)=>{
  // resolve('成功');
  reject('拒绝');
})

new Promise((resolve, reject) => {
  // 此时resolve会返回一个Promise对象,状态未成功,从而执行resolve方法
  // resolve(p1);

  // Promise的状态是单向的,不可逆的
  // 状态改后,就是不可逆的
  resolve('fulfilled');
  // 如果再拒绝也是没有效果的
  reject('failed');
}).then(
  msg => {
    console.log(msg)
  },
  error => {
    console.log(error)
  }
)