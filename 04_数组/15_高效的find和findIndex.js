let arr = [1, 2, 3, 4, 5];
// find方法
// 返回true时将元素返回 , 并结束find方法
// 若遍历后没有返回true , 则返回undefined
let res = arr.find(item => {
  return true;
})
console.log(res);

// find 方法一般用于引用类型的查找
let lesson = [{ name: 'js' }, { name: 'css' }];
let lessonRes = lesson.find(item => {
  return item.name === 'js'
})
console.log(lessonRes)

// findIndex , 与find相比较 返回索引值
lessonRes = lesson.findIndex(item => {
  return item.name === 'js'
})
console.log(lessonRes)
