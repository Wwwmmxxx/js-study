function User() { }
User.prototype.name = function () {
  console.log('user name method');
}

function Admin() { }
let a = new Admin();
Admin.prototype = Object.create(User.prototype);
Admin.prototype.role = function () {
  console.log('admin.role')
}

// 此时会报错 , 因为新建a的原型后 , 是在新的a的原型上添加了方法role
// 而创建A对象时的原型 , 已经被抛弃 , 所以失败
// 所以最好使用:Admin.prototype.__proto__ = User.prototype;
// 这个可以想象成 , 原型的父类 为 另一个的原型 => 建立了父子关系
a.role(); 

