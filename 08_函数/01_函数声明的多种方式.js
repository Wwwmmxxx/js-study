// 1.使用new Function
let func = new Function('title', 'console.log(title)');
func("后盾人");

// 2.使用function关键字
function hd(title) {
  console.log(title);
}
hd("houdunren");

// 3.使用变量
let cms = function (title) {
  console.log(title);
};

// 4.函数编组
let user = {
  name: null,
  setUsername: function (name) {
    this.name = name;
  },
  // 可以简写为getUsername(){}
  getUsername: function () {
    return this.name;
  }
}
user.setUsername("后盾人");
console.log(user.getUsername());
