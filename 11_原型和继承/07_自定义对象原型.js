let hd = { name: 'hd' };
let parent = {
  name: 'parent',
  show() {
    // this.name永远指向当前对象的name属性
    console.log('parent method:' + this.name)
  }
};

// 设置hd的父亲为parent
Object.setPrototypeOf(hd, parent);
hd.show();// 此时的this.name表示hd的name属性
parent.show(); // 此时的this.name表示parent的name属性

// 查看对象的原型
console.log(Object.getPrototypeOf(hd));