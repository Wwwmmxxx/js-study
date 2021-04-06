let p1 = new Promise((resolve, reject) => {
  resolve('fulfilled');
}).then(
  value => {
    // 1.返回一个Promise
    // return new Promise((resolve, reject) => {
    //   resolve('成功')
    // })
    // 2.返回一个对象 , 那么then中将会接收到这个对象
    // return{
    //   name:"后盾人"
    // }
    // 3.返回一个then方法,且有两个参数resolve,reject
    // 此时会被当做Promise来使用
    // return{
    //   then(resolve,reject){
    //     resolve('这是对象');
    //   }
    // }
    //  4.返回一个类,作用相同
    // class Hd{
    //   then(resolve,reject){
    //     resolve('这是对象');
    //   }
    // }
    // return new Hd();
    // 5. 返回一个静态方法
    return class{
      static then(resolve,reject){
        resolve('这是一个静态方法');
      }
    }
  },
  reason => { }
).then(value => {
  console.log(value)
});