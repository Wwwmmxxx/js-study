// php: trait mixin 混合功能
// 实现了一个类似于多继承的功能
const Request = { ajax() { console.log('ajax') } }

const Address = {
  __proto__: Request,
  getAddr() {
    // this.__proto__.ajax()
    // 可以使用super关键字替代
    // super 指代当前的原型 , super = this.__proto__
    // 注意 , 此时对象的原型不变 , 并不是admin对象调用 , 所以this并不指向admin
    // 归根结底 , 这个地方是在访问Request这个对象 , 而不是Admin对象
    super.ajax();
  }
}

function User(name, age) {
  this.name = name;
  this.age = age;
}

function Admin(name, age) {
  User.call(this, name, age);
}

// 将ajax方法压入Admin的prototype中
// Admin.prototype.ajax = Request.ajax;
// Admin.prototype.total = Credit.total;
// 那如果有多个类的话 , 需要一个个添加 , 在JS中提供了Object.assign方法对应
Admin.prototype = Object.assign(Admin.prototype, Request, Credit, Address);

let admin = new Admin('徐逸飞', 19);
admin.ajax();
admin.total();
admin.getAddr();
