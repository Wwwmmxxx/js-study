let lesson = [
  { title: '1', category: 'css' },
  { title: '2', category: 'css' },
  { title: '3', category: 'js' },
]

lesson.forEach(function (item, index, lesson) {
  console.log(item, index, lesson);
  console.log(this);
})

// forEach能够直接操作Dom元素
let lis = document.querySelectorAll("ul li");
lis.forEach((item) => {
  item.classList.toggle("disabled");
});