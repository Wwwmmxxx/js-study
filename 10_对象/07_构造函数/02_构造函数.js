// 构造函数时 , 命名规则为首字母大写
function Student(name) {
  // this指当前创建的对象
  this.name = name;
  this.show = function () {
    console.log(this.name)
  }
  // 不需要返回return
}

// 由于函数中没有返回return对象,所以需要使用new关键字
const lisi = new Student('lisi');
const zhangsan = new Student('zhangsan');
lisi.show();
zhangsan.show();