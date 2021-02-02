// User既是对象 , 也是方法 , 也是类
function User(){
  // 但是方法是建议放到原型上的 , 这样可以减少内存空间
  // this.show = function(){};
}

User.prototype.show1 = function(){
  console.log(`User.prototype.show1()`)
}

// 这样的方法称为静态方法
User.__proto__.show2 = function(){
  console.log(`User.show2()`);
  // 此事是能够打印this的, 且this指向当前的User
}

let hd = new User();
hd.show1()
User.show2();

//----------------------------在类中的用法--------------------------
class User2{
  show(){
    console.log("prototype.show()")
  }
  // 这里虽然方法名相同 , 但是由于使用了static关键字 , 他们就是不同的方法
  static show = function(){
    console.log('static.show()')
  }
}

let user = new User2();
User2.show(); // static.show();
user.show();  // prototype.show();

//------------------案例-----------------------
class User3{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  static create(...args){
    return new this(...args);
  }
}

let user3 = new User3('徐逸飞');
let xyf = User3.create('徐逸飞',19);
console.log(xyf);