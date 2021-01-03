let lesson = [
  { title: '1', category: 'css' },
  { title: '2', category: 'css' },
  { title: '3', category: 'js' },
]

for (let index = 0; index < lesson.length; index++) {
  lesson[i].title = `后盾人${lesson[i].title}`
}

// 此时是引用类型, 所以会改变会来的数组
for (const value of lesson) {
  value.title = `后盾人${value.title}`
}

// 此时是值类型 , 所以本身是不能改变的
let arr = [1, 2, 3]

for (const value of arr) {
  value += 10;
}

for (const key in lesson) {
  lesson[key].title = `后盾人${lesson[key].title}`
}

// 对于一个对象数组
// forof循环 , 每次遍历获取 , 对象数组中的一条记录
// forin循环 , 每次遍历获取 , 对象数组中的一条记录的下标

// 对一个对象
// forof循环 , 每次遍历获取 , 对象中的属性
// forin循环 , 迭代器报错

// 对于一个普通数组
// forof循环 , 每次遍历获取 , 对象数组中的一条记录
// forin循环 , 每次遍历获取 , 元素的下标