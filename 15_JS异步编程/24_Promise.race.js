// 与all的区别是
// 没解决也行,我会把它收集起来
const hdcms1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('第一个异步')
  }, 2000)
})

const hdcms2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('第二个异步')
  }, 1000)
})

// Promise.race方法,哪个返回快就输出哪一个
Promise.race([hdcms1, hdcms2]).then(results => {
  // hdcms2为1s , 所以优先返回
  console.log(results);
})

//----------------案例----------------------
// 使用race处理请求超时
let promises = [
  ajax(`http://hocalhost:8080/php/user.php?name=后盾人`),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('请求超时')
    }, 2000);
  })
]

Promise.race(promises).then(value => {
  console.log(value)
}).catch(error => {
  console.log(error)
})

// ----------------------封装函数--------------------
function query(url, delay = 2000) {
  let promises = [
    ajax(url),
    new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('请求超时')
      }, 2000);
    })
  ];
  return Promise.race(promises);
}