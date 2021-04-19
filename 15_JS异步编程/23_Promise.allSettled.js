// 与all的区别是
// 没解决也行,我会把它收集起来
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

// 总能得到状态 , 只不过可以使拒绝的状态
Promise.allSettled([hdcms1, hdcms2]).then(results => {
  console.log(results);
})

//---------------------实例----------------------
let promises = ['后盾人', '李四'].map(name => {
  return ajax(`http://localhost:8888/php/user.php?name=${name}`)
})

Promise.allSettled(promises).then(value => {
  let users = values.filter(user => {
    // 筛选状态
    return user.status == 'fulfilled';
  })
  console.log(users);
})