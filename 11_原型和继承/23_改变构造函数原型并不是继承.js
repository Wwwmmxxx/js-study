// 原型的继承 , 而不是改变构造函数的原型
// 改变构造函数的原型 , 不是继承
function User() {}
User.prototype.name = function () {
  console.log('user name method');
}
let hd = new User();

function Admin(){}
// 和User用一个原型 , 虽然这么一看是没有问题的 , 但是是会有问题的
// 但是当多个角色需要使用时 , 因为指向的是同一个User , 所以方法就会出错
Admin.prototype = User.prototype; 
Admin.prototype.role = function(){
  console.log('admin.role')
}
let admin = new Admin();
admin.role(); // admin.role

function Member(){}
Member.prototype = User.prototype;
Member.prototype.role = function(){
  console.log('member.role')
}
let member = new Member();
member.role(); // member.role
admin.role(); // member.role