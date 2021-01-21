// 有多个角色 需要继承User , 但是都需要name和age属性
// 所以有没有方法可以将name和age定义在父类中 , 方便使用
function User(name, age) {
  this.name = name;
  this.age = age
}
User.prototype.show = function () {
  console.log(this.name,this.age)
}

function Admin(...args) {
  // User(name,age); // 这是错误的写法 , 因为此时User中的this指向window对象
  // User.call(this, name, age);
  User.apply(this, args);
}
Admin.prototype = Object.create(User.prototype);

let xj = new Admin('徐逸飞', 18)
xj.show();