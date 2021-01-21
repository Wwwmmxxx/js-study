function User() { }
User.prototype.show = function () {
  console.log('User show()')
}

User.prototype.site = function () {
  console.log('User site()')
}

function Admin() { }
Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;
Admin.prototype.show = function () {
  // 调用父级方法
  User.prototype.site();
  console.log('Admin show()');
}

let hd = new Admin();
hd.show()