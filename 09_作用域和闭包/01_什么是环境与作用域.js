// 在JS中 , 全局的环境是不会被回收的
// 除非你将页面关闭
// 以下的所有数据都会被保留
let title = '后盾人';
function hd() {
  alert(title);
}
document.querySelector('button').addEventListener('click', hd());

// 作用域
// 此时title是一个全局的 , 可以渗透到函数中
// 在其他语言中 , 这个地方是存在区别的
function show(){
  console.log(title);
}
show();