// 1. 数组参数的使用
function hd1([a, b]) {
  console.log(a, b);
}
hd1(['hdcms', 'houdunren.com']);

// 2. 对象参数的使用方法
function hd2({ username, url, user = 'xuyifei' }) {
  console.log(username, url, user);
}
hd2({ username: 'sdju', url: 'www.' })

// 3.对象结构传参
function hd3(username, { sex, age } = {}) {
  console.log(username, sex, age);
}
hd3('xuyifei', { sex: 'nan', age: 18 });
