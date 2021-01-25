function extend(sub, sup) {
  sub.prototype = Object.create(sup.prototype);
  Object.defineProperty(sub.prototype, 'contructor', {
    value: sub,
    enumerable: false
  })
}

// 注意以下使用extend的时间顺序
// 多重继承会使得代码之间难以区分,职责混乱
function Address() { }
Address.prototype.getAddr = function () {
  console.log('address');
}

function Access() { }
Access.prototype.getAccess = function () {
  console.log('获取权限');
}

function Creadit() { }
Creadit.prototype.total = function () {
  console.log('黄金会员');
}

function Request() { }

extend(Request, Creadit);

Request.prototype.ajax = function () {
  console.log('请求后台')
}


function User(name, age) {
  this.name = name;
  this.age = age;
}

extend(User, Request);

User.prototype.show = function () {
  console.log(this.name, this.age);
}

function Admin(name, age) {
  User.call(this, name, age);
}

extend(Admin, User);

let admin = new Admin('徐逸飞', 19);
admin.show();
admin.ajax();
admin.total();

function Member(name, age) {
  User.call(this, name, age);
}