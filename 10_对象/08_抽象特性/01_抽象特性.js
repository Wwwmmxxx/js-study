// 问题分析
function User(name, age) {
  this.name = name;
  this.age = age;
  this.info = function () {
    return this.age > 50 ? "中年人" : "年轻人";
  };
  this.about = function () {
    return `${this.name}是${this.info()}`;
  }
}

let lisi = new User('李四', 22);
console.log(lisi.about());

// 抽象封装
// 通过将属性使用let进行定义 , 不使用this , 达到data和info只能在内部使用
function User1(name, age) {
  // data不需要被外部访问
  let data = { name, age };

  // info不需要被外部访问
  let info = function () {
    return this.age > 50 ? "中年人" : "年轻人";
  };

  // message允许被外部访问
  this.message = function () {
    return `${data.name}是${info()}`;
  }
}
let lisi2 = new User1('李四', 23);
console.log(lisi2.message());
console.log(lisi2.data); // 此时会显示undefined