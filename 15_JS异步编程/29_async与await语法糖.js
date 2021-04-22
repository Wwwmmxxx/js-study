new Promise(resolve => {
  console.log('后盾人');
  resolve('houdunren.com');
}).then(v => {
  console.log(v);
})

// 类似等同于new Promise , 此时是resolved状态
async function hd() {
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve("houdunren.com");
    },2000)
  });
}

hd().then(v => console.log(v));

async function hd2(){
  // await类似于then
  let a = await new Promise(resolve=>{
    setTimeout(()=>{
      resolve("Wang Mengxi");
    },2000)
  });
  console.log(a);

  let b = await new Promise(resolve=>{
    setTimeout(()=>{
      resolve("Xu Yifei");
    },2000)
  });
  console.log(b);
}

hd2();