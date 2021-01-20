function User() {}
User.prototype.name = function () {
  console.log('user name method');
}

function Admin(){}
// Admin.prototype.__proto__ = User.prototype; 
// 创建一个新的原型对象 , 必须放在方法上面 , 因为这个方法相当于创建了一个原型 
// 如果方法在上面 , 则会直接被新的原型覆盖 , 而原来的方法不再存在
Admin.prototype = Object.create(User.prototype); 
Admin.prototype.role = function(){
  console.log('admin.role')
}

function Member(){}
Member.prototype.__proto__ = User.prototype;
// create方法有两种用法
// 1. 创建一个对象 ; 
// 2. 使用一个对象的原型作为新对象的原型 ;
Member.prototype = Object.create(User.prototype);
Member.prototype.role = function(){
  console.log('member.role')
}

let hd = new User();
let admin = new Admin();
admin.role(); // admin.role
let member = new Member();
member.role(); // member.role
admin.role(); // member.role