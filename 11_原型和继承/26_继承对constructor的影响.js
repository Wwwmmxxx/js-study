function User() { }
function Admin() { }
Admin.prototype = Object.create(User.prototype);
// 根据3的结论
Admin.prototype.contructor = Admin;
Admin.prototype.role = function () {
  console.log('admin.role()');
}

// 此时可以看到
// 1. Admin自身其实是没有constructor方法的
// 2. Admin的constructor方法实际上是来源于User的
// 3. 由此得出结论 : 当使用Create创建原型时 , 最后需要重新赋值constructor
console.dir(Admin.prototype.contructor)