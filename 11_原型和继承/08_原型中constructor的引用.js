function User(name) { this.name = name; }

// 定义多个方法 , 有可能会使用到以下方法
// 但是这样是错误的 , 相当于为User重新定义了一个父元素 , 但是父元素中没有constructor , 出现错误
User.prototype = {
  constructor:User(),
  show(){
    console.log(this.name)
  },
}

// 这种不属于改变 , 属于向对象中追加属性
User.prototype.show = function(){
  console.log(this.name);
}

// 可以通过父亲找到儿子 , 如下
console.log(User.prototype.constructor === User); // 返回true
// 可以通过.prototype.constructor的方式新建对象
let lisi = new User.prototype.constructor('里斯'); 
lisi.show();

