// 方法1:在Promise中使用setTimeout , 使用宏任务队列
// function sum(num){
//   return new Promise(resolve=>{
//     setTimeout(()=>{
//       let count = 0;
//       for (let i = 0; i < num; i++) {
//         count += num--;
//       }
//       resolve(count);
//     })
//   })
// }

// async function hd(num){
//   let res = await sum(num);
//   console.log(res);
// }

// let num = 987654321;

// hd(num);
// console.log('后盾人');


// 方法二:使用微任务队列
async function hd(num) {
  let res = await Promise.resolve().then(resolve => {
    let count = 0;
    for (let i = 0; i < num; i++) {
      count += num--;
    }
    return count;
  });
  console.log(res);
}

hd(987654321);
console.log('后盾人');