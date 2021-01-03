// WeakMap对象是一组键/值对

// 1. 键名必须是对象 , 如果是普通类型 , 则会报错
new WeakMap('houdunren');

// 2. 基本使用 => 将DOM节点保存到WeakMap中
// <body>
//   <div>houdunren</div>
//   <div>hdcms</div>
// </body>
const hd = new WeakMap();
document.querySelectorAll("div").forEach(item => {
  hd.set(item, item.innerHTML);
})
console.log(hd);
