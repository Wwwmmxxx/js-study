const data = [
  { name: 'js', price: 100 },
  { name: 'mysql', price: 212 },
  { name: 'vue.js', price: 98 }
]

class Lesson {
  constructor(data) {
    this.model = data;
  }
  get price() {
    return this.model.price;
  }
  get name() {
    return this.model.name;
  }
  static createBatch(data) {
    return data.map(item => new Lesson(item));
  }
  static maxPrice(data) {
    return data.sort((a, b) => {
      return b.price - a.price;
    })[0]
  }
  static totalPrice(data) {
    return data.reduce((t, c) => {
      return t + c.price
    }, 0)
  }
}

// 如果我们不止对一个对象进行操作的话 , 我们可以使用静态属性完成.
// 使用静态方法可以达到批量生成的目的
let lessons = Lesson.createBatch(data);
console.log(lessons);
// 获取最贵的课程
console.log(Lesson.maxPrice(lessons).name);
// 获取总价
console.log(Lesson.totalPrice(lessons))