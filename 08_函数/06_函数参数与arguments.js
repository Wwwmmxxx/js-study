// 1.当参数不确定时,可以使用arguments进行控制
function sum() {
  let total = 0;
  // for (let index = 0; index < arguments.length; index++) {
  //   const element = arguments[index];
  //   total += element;
  // }
  total = [...arguments].reduce((a, b) => a + b);
  return total;
}

console.log(sum(1, 54, 2, 1, 2, 3, 21, 2, 3));

// 2.在新版中可以使用...语法
function sum1(...args){
  total = args.reduce((a, b) => a + b);
}