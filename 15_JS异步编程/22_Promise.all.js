const hdcms1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('第一个异步')
  }, 1000)
})

const hdcms2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('第二个异步')
  }, 1000)
})

// 需要注意
// 1.如果其中的任意一个请求出现reject , 则整个Promise出错
// 1.1 如果其中一个一个Promise有catch , 则由于整个状态会变为解决 , 那么就不会在Promise.all中再捕获
// 2.在Promise.all中定义的catch能够捕捉所有Promise的错误
// 3.所有的请求状态必须为已解决状态
Promise.all([hdcms1, hdcms2]).then(result => {
  console.log(result)
})

//----------------根据用户名批量获取数据-------------------
// const promises = ['后盾人', '向军'].map(name => {
//   return ajax(`http://localhost:8888/php/user.php?name=${name}`);
// })

// Promise.all(promises).then(user =>{
//   console.log(user);
// })