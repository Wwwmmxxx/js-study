function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(5))

// 递归求和
let sum = [1, 2, 3, 4, 5, 6].reduce((a, b) => a + b);
console.log(sum);

function sum2(...args) {
  if (args.length === 0) {
    return 0;
  }
  return args.pop() + sum2(...args);
}

console.log(sum2(1, 2, 3, 4, 5, 6));

// 递归实现倒三角
function star(sum){
  if(sum === 0){
    return
  }
  console.log('*'.repeat(sum));
  star(--sum);
}

star(5);