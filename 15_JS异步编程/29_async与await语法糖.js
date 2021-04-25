// new Promise(resolve => {
//   console.log('后盾人');
//   resolve('houdunren.com');
// }).then(v => {
//   console.log(v);
// })

// 类似等同于new Promise , 此时是resolved状态
// async function hd() {
//   return new Promise(resolve=>{
//     setTimeout(()=>{
//       resolve("houdunren.com");
//     },2000)
//   });
// }

// 可以看到hd函数是一个已解决的Resolve
// 所以相当于new Promise() , 同样可以是使用then
// hd().then(v => console.log(v));

async function hd2(){
  // await类似于then , 此时任务就不会执行
  let a = await new Promise(resolve=>{
    setTimeout(()=>{
      resolve("Wang Mengxi");
    },2000)
  });
  // 能够拿到a
  console.log(a);

  let b = await new Promise(resolve=>{
    setTimeout(()=>{
      resolve("Xu Yifei");
    },2000)
  });
  console.log(b);
}

hd2();