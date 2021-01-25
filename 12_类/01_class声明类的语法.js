class User {
  show() { }
  get() { console.log('后盾人'); }
}

// let Hd = class{};// 这种方法也没有错
console.log(User);// 此时为一个Function

let hd = new User();
hd.get();

// 以下作为类与函数的对比
function Article1(title) {
  this.title = title;
}
let a1 = new Article1('后盾人');
console.log(a1.title);

class Article2 {
  // 特殊函数 , 自动被执行
  constructor(title) {
    this.title = title
  }
}
let a2 = new Article2('后盾人2');
console.log(a2.title);