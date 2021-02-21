let hd = "houdunren.com";
// 在这里不需要写字面量的两个// , 第二个参数为模式
let reg = new RegExp('u', 'g');
// 第一个参数可以使用变量
console.log(reg.test(hd));

// 案例
<div class="content">
  houdunren.com
</div>

let con = prompt('请输入要检测的内容,支持正则')
const div = document.querySelector('div');
const reg = new RegExp(con, 'g');
div.innerHTML = div.innerHTML.replace(reg, search => {
  return `<span style="color:red">${search}</span>`
})