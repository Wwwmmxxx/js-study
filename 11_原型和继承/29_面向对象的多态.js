function User() { }
User.prototype.show = function () {
  console.log(this.description());
}

function Admin() { }
Admin.prototype = Object.create(User.prototype);
Admin.prototype.description = function () {
  return 'Admin'
}

function Member() { }
Member.prototype = Object.create(User.prototype);
Member.prototype.description = function () {
  return 'Member'
}

for (const obj of [new Admin,new Member]){
  obj.show();// 此时会显示不同的结果 , 此时会有多态 , 根据不同的状态显示不同的结果
}