// 具名函数
// 提前运行show()时,不会报错 => 原因: JS会自动提升函数
show();
function show() {
  console.log("后盾人");
}

// 匿名函数
// 提前运行hd(),会报错 => 原因: 匿名函数是不会自动提升的
// hd();
let hd = function () {
  console.log("后盾人");
}

// 在js中,函数是一个对象 , 所以可以进行引用类型复制
let cms = show;
cms();

function sum(...args) {
  console.log(args);
  return args.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 45, 2, 1, 2));