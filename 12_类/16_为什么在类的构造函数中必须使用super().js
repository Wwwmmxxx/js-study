class User {
  constructor(){
    this.name = name;
  }
}

class Admin extends User {
  // 不写时 , 等同于以下分析中的User.call(this, ...args);
  constructor(...args) {
    // super()关键字必须定义在this关键字之前
    // this.site = 'xuyifei' // 这是错误的
    super(...args);// 此处必须写super()
    this.site = 'xuyifei';
  }
}

let hd = new Admin();
console.log(hd);

// ------------------------分析------------------------

function User(name) {
  this.name = name;
}

function Admin(...args) {
  User.call(this, ...args);
}

Admin.prototype = Object.create(User.prototype);
