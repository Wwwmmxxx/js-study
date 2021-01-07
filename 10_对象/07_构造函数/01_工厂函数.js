// 在函数中返回对象的函数称为工厂函数 , 工厂函数有以下有点
// 优点:
// 1. 减少重复创建相同类型对象的代码
// 2. 修改工厂函数的方法影响所有同类对象
const xj = {
  name: '向军',
  show() {
    console.log(this.name);
  }
}

const hd = {
  name: '后盾人',
  show() {
    console.log(this.name);
  }
}

// 使用工厂函数
function stu(name) {
  return {
    name,
    show() {
      console.log(this.name);
    }
  }
}

const lisi = stu('李四');
lisi.show();
const zhaosi = stu('赵四');
zhaosi.show();