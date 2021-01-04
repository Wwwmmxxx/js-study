// 全局作用域只有一个 , 每个函数都有自己的作用域(环境).

// 编译器运行时 , 会将变量定义在所在作用域
// 使用变量时会从当前作用域开始向上查找变量


// 1. 函数被执行后其环境变量将从内存中删除.
function count() {
  let total = 0;
}
count();

// 2.函数每次调用 , 都会创建一个新的作用域
let site = '后盾人';
function a() {
  let hd = 'houdunren.com';
  function b() {
    let cms = 'hdcms.com';
    console.log(site);
    console.log(hd); // 此时能够读取到上一级的hd
    console.log(cms);
  }
  b();
}
a();

// 3. 

