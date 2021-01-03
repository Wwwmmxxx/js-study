let str1 = "houdunren.com";

function show() {
  return "houdunren.com"
}

// 表达式中是可以写函数和表达式的
let hd = `www ${show()}`;
console.log(hd)

// 嵌套的例子
let lesson = [{ title: '响应式布局' }, { title: 'Flex弹性盒模型' }, { title: '栅格布局' }];

function template() {
  return `
  <ul>${lesson.map(item => `<li>${item.title}</li>`).join("")}</ul>
  `
}

// 输出结果:<ul><li>响应式布局</li><li>Flex弹性盒模型</li><li>栅格布局</li></ul>
console.log(template());