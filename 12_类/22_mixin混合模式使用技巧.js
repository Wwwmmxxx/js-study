let Tool = {
  max(key) {
    return this.data.sort((a, b) => b[key] - a[key])[0]
  }
}

class Lesson {
  constructor(lessons) {
    this.lessons = lessons;
  }
  get data() {
    return this.lessons;
  }
}

const data = [
  { name: 'js', price: 100, click: 188 },
  { name: 'php', price: 110, click: 99 },
  { name: 'css', price: 90, click: 88 }
]

Object.assign(Lesson.prototype, Tool); // 向Lesson的prototype中压入max方法

let hd = new Lesson(data);

console.log(hd.max('price'));