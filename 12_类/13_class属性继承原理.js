function User(name){
  this.name = name;
}

function Admin(name){
  // 为了使用User的属性 , 所以调用call方法
  User.call(this,name);
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.show = function(){}

let hd = new Admin('后盾人');
console.log(hd);

//----------类的形式-------------
class User1{
  constructor(name){
    this.name = name;
  }
}

class Admin1 extends User1{
  constructor(name){
    // 使用super , 相当于以前的call方法
    super();
  }
}