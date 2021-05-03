new Promise((resolve, reject) => {
  reject('拒绝');
}).then() // 此处有then穿透
  .then(value => {
    console.log(value);
  })

// 注意,此时是异步的
console.log("后盾人");

let p1 = new Promise(resolve => {
  resolve('p1');
})

let p2 = new Promise((resolve, reject) => {
  reject('reject')
})

// all方法有一个失败,则失败
Promise.all([p1, p2]).then(value => {
  console.log(value);
}, reason => {
  console.log(reason);
});