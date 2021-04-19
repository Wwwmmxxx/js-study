Promise.reject('fail').then(value => {
  console.log(value);
}).catch(error => {
  console.log(error)
})


new Promise((resolve, reject) => {
  resolve('success');
}).then(value => {
  if(value !== 'successes'){
    // 处理错误的方式1 , 使用throw关键字
    // throw new Error('fail');
    // 处理错误的方式2 , 使用Promise.reject函数
    return Promise.reject('参数错误')
  }
}).catch(error => {
  console.log(error)
})