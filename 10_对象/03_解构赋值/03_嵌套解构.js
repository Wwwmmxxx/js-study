let obj1 = {
  stuName: 'xuyifei',
  lesson: {
    title: 'js'
  }
}
// 嵌套解构时 , 只能默认使用对象内的属性
let { stuName, lesson: { title } } = obj1;
console.log(title);