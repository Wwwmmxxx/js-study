function User() { }

// 其中有两个长辈:prototype,__proto__
// __proto__ : 当函数作为对象使用时 , 使用此长辈 , 在此处表示User
console.dir(User);

// prototype : 服务于实例化对象 , 在此处表示hd
let hd = new User(); // hd只有一个父亲prototype
console.log(User.prototype === hd.__proto__); // 返回true

User.prototype.show = function () {
  console.log('show')
};
hd.show(); // 此时用的是prototype

User.__proto__.show = function () {
  console.log('__proto__ show()');
}
User.show(); // 此时使用的是__proto__