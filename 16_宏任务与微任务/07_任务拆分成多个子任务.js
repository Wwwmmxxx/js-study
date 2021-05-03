// function hd() {
//   for (let i = 0; i < num.length; i++) {
//     count += num--;
//   }
// }

// let num = 987654321;
// let count = 0;

// hd();

// // 此时必须等待hd()函数执行完成后,再输出后盾人
// console.log('后盾人');

//------------------改进--------------------

function hd() {
  for (let i = 0; i < 10000000; i++) {
    if (num <= 0) break;
    count += num--;
  }
  if (num > 0) {
    // 把它放到定时器中 , 不影响主线程的运行
    setTimeout(hd);
    console.log(num);
  }else{
    console.log(count);
  }
}

let num = 987654321;
let count = 0;

hd();

// 此时必须等待hd()函数执行完成后,再输出后盾人
console.log('后盾人');