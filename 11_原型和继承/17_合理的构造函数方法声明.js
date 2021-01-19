function User(name) {
  this.name = name;
}

// 将方法放到原型中进行复用 , 减少无效的内存开销
User.prototype.show = function () {
  console.log(this.name);
}

// 如果有多个方法
User.prototype = {
  constructor: User,
  show() {
    console.log(this.name)
  },
  get() {
    console.log('get...')
  }
}

let lisi = new User('李四');
let xj = new User('湘军');
console.log(lisi);
console.log(xj)