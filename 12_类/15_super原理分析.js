class User {
  show() {
    console.log('1')
  }
}

class Admin extends User {
  show() {
    // 调用父级类的方法
    super.show();
    console.log('2')
  }
}

let hd = new Admin();
hd.show(); // 此时是使用Admin的show()方法

// 是怎么实现的?
let common = {
  show() {
    console.log('common.show()')
  }
}

let hd2 = {
  __proto__: common,
  show() {
    super.show();
    console.log('hd.show()')
  }
}

let xj2 = {
  __proto__: hd2,
  show() {
    // 这里就会有问题 , 当hd2的方法中使用this时 , this将会指向hd2 , 导致了使用了父级的属性 , 但我们实际上是想用子集的属性
    // this.__proto__.show();
    // 所以这个地方最好使用call函数改变this
    // 但是即使是这样也是会有隐患的 , 当hd2也有父级时 , 此时即便即使用了call , 但是this是指向自己的 , 会产生死循环
    // this.__proto__.show.call(this);
    // 为了解决这个问题 , 出现了super关键字 , super只做原型攀升 , 要区分this
    // super只能针对方法 , 而不能针对属性 , 所以不能再show:function(){}形式中使用
    super.show();
    console.log('xj.show()');
  }
}

xj2.show();