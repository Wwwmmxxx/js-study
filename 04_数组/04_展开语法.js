let arr = ['hdcms', 'houdunren'];
let hd = ['js', 'css'];

// 以前的方法
for (const value of hd) {
  arr.push(value);
}

console.log(arr);

// 现在的方法 => 展开语法
arr = [...arr, ...hd];
console.log(arr);

// 展开语法用于函数的参数
function show(...args) {
  return args.reduce((s, v) => {
    return s + v;
  }, 0);
}

console.log(show(1, 2, 3, 4, 5))