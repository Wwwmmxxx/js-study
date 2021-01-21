function User() { }
function Admin() { }
Admin.prototype = Object.create(User.prototype);
// Admin.prototype.contructor = Admin;
// 根据结论 , 这里应该这样修改
Object.defineProperty(Admin.prototype, 'constructor', {
  value: Admin,
  enumerable: false
})
Admin.prototype.role = function () {
  console.log('admin.role()');
}

// 通过以下语句 可以看到 , 属性中有一条enumerable:true
// 导致了forin遍历时 , 能够拿到两个值:constructor 和 role
// 所以可以使用定义特征的方式完成这个操作 => 致使constructor不会被遍历到
console.log(Object.getOwnPropertyDescriptor(Admin.prototype));

let a = new Admin();

for (const key in a) {
  console.log(key);
}