let name = '后盾人';
let web = 'houdunren.com';
console.log(tag`在线教程${name},网址是${web}.`);
function tag(strings, ...vars) {
  // 输出 => [ '后盾人', 'houdunren.com' ]
  console.log(vars);
  // 输出 => [ '在线教程', ',网址是', '.' ]
  console.log(strings)
}

// 需要注意如果对一个最简单模板使用时,会出现前面两个空格
// 输出1 => [ '后盾人' ]
// 输出2 => [ '', '' ]
// 可以得出结论 , strings的长度是大于变量的
console.log(tag`${name}`);

//实例
let lesson = [
  { title: '响应式布局', author: "后盾人" },
  { title: 'Flex弹性盒模型', author: "后盾人" },
  { title: '栅格布局', author: "后盾人" }
];

function template() {
  return `
  <ul>${lesson.map(item => links`<li>作者:${item.author},标题:${item.title}</li>`).join("")}</ul>
  `;
}

// 需求:每一个后盾人都添加一个链接
function links(strings, ...vars) {
  return strings.map((str, key) => {
    return str + (vars[key] ? vars[key].replace("后盾人", `<a href="http://www.baidu.com">百度</a>"`) : "")
  }).join("")
}

console.log(template());