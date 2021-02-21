let hd = "hodunren2010";
console.log(hd.match(/\d+/));
// w表示字母,数字,下划线
console.log(hd.match(/\w+/));

// 案例
let email = '348377025@qq.com';
console.log(email.match(/^\w+@\w+\.\w+$/));

// \W表示除了字母,数字,下划线
console.log('hdcms@'.match(/\W/));

// 字母开始 , 一共5-10位
let username = prompt('请输入用户名');
console.log(/^[a-z]\w+{4,9}$/.test(username));