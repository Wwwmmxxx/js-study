// 模块发展的历史
// AMD require.js
// CMD sea.js
// COMMONJS 服务于NODE.JS
// UMD

// 注意,此处只能用var关键字,const和let不支持
var module = (function () {
  const moduleList = {};
  function define(name, modules, action) {
    // 为什么这里需要Modules[i] = moduleList[m]
    // 因为需要把modules中的顺序与传入参数的顺序相同
    modules.map((m, i) => {
      modules[i] = moduleList[m];
    })
    moduleList[name] = action.apply(null, modules);
    // console.log(moduleList)
  }
  return { define }
})();

module.define('hd', [], function () {
  return {
    first(arr) {
      return arr[0];
    },
    max(arr, key) {
      return arr.sort((a, b) => b[key] - a[key])[0]
    }
  }
});

module.define('lesson', ['hd'], function (hd) {
  let data = [
    { name: 'js', price: 199 },
    { name: 'php', price: 198 },
    { name: 'css', price: 78 },
  ]

  console.log(hd.max(data, 'price'));
})