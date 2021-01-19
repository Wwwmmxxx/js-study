let lisi = {name: '李四'};
let wangwu = { name: '王五' };

function User(web, url) {
  console.log(this.name);
}

// call,apply 会立刻执行User()
// 1. call方法传入的参数用逗号分隔即可
User.call(lisi, '后盾人', 'houdunren.com');
// 2. apply方法传入的参数需要使用数组
User.apply(lisi, ['后盾人', 'houdunren.com']);

// 案例一: 界面上有两个按钮
// <button>hdcms</button>
// <button>houdunren.com</button>

function show() {
  alert(this.innerHTML);
}

let button = document.querySelectorAll('button');
for (let i = 0; i < button.length; i++) {
  const element = button[i];
  element.addEventListener('click', event => {
    show.apply(event.target);
  })
}

// 案例二: 使用Math获取最大值
let arr = [1, 2, 3, 4, 5];
// 此处不能使用call方法
// 使用apply方法 , 因为参数可以为数组 , 所以这个地方直接使用apply即可
console.log(Math.max.apply(Math, arr));