// php: trait mixin 混合功能
// 实现了一个类似于多继承的功能
const Address = {
  getAddr() { console.log('address') }
}

const Credit = {
  total() { console.log('credit'); }
}

const Request = {
  ajax() { console.log('ajax') }
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
