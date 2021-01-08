'use strict'
const user = {
  data: {
    name: '后盾人', age: null
  },
  set age(value) {
    if (typeof value !== 'number' || value > 100 || value < 10) {
      throw new Error('年龄格式错误')
    }
    this.data.age = value;
  },
  get age() {
    return `年龄是:${this.data.age}`;
  },
  get name() {
    return `姓名是:${this.data.name}`;
  }
}

// user.age = 101; // 此时会报错
user.age = 99; // 此时会报错
console.log(user.age)

user.name = '101'; // 此时会报错 , 因为属性值只能在访问器和普通属性任选其一