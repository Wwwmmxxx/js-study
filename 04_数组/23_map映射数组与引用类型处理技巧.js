let arr = ['hdcms', 'houdunren'];

// 处理每数组中的每一项
// 如果处理值类型的时候 , 不会改变原来的数组
let newArray = arr.map(function (value, index, arr) {
  value = `后盾人-${value}`
  return value;
});

// 如果处理引用类型的时候 , 会改变原来的数组
// 可以使用Object.assign方法重新创建
// 或者直接返回一个新的对象
let newArray = arr.map(function (value, index, arr) {
  // return Object.assign({ click: 100 }, value)
  return {
    title: value.title,
    category: value.category,
    click: 100
  }
});

