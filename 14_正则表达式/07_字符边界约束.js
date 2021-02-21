let hd = '2';
// test方法匹配字符串中包含为数字,则为真.
// 对于开始和结束没有限定
console.log(/\d/.test(hd));
// 开始为数字,结束也为数字
console.log(/^\d&/.test(hd));

// 案例 , 完全匹配检测3-6位英文
<input type="text" name="user"></input>

document.querySelector("[name='user]").addEventListener("keyup", function () {
  // 这里一定要使用起始^和结束$ , 否则无法确保是3-6个字符
  this.value.match(/^[a-z]{3,6}$/);
})