// 使用递归完成循环的操作
// 当有些参数为默认参数时 , 可以使用递归
let lessons = [
  {
    title:'盒子模型',
    click:29
  },{
    title:'flex布局',
    click:27
  }
]

function change(lessons, num = 100, i = 0) {
  if (i === lessons.length) {
    return lessons;
  }
  lessons[i].click += num;
  return change(lessons, num, ++i)
}

console.table(change(lessons));