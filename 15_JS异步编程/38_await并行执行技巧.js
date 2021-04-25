function p1(){
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve("Wang Mengxi");
    },2000)
  });
}

function p2(){
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve("XuYifei");
    },2000)
  });
}

async function hd(){
  // 此时是有顺序的 , 不是并行执行
  let h1 = await p1();
  console.log(h1);
  let h2 = await p2();
  console.log(h2);

  // 方式一:并行执行
  let h3 = p1();
  let h4 = p2();
  let h3value = await h3;
  let h4value = await h4;
  console.log(h3value,h4value);

  // 方式二: 更推荐的写法
  let res = await Promise.all([p1(),p2()]);
  console.log(res);
}

hd();