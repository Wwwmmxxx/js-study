class User {
  // public protected private
  // 使用#表示私有属性 ,不会被子类继承
  // 可以通过访问器进行设置
  #host = 'www.baidu.com'

  constructor(name) {
    this.name = name;
    this.check(name);
  }

  // 注意必须使用属性的定义方式 , 否则报错方式会产生错误
  // #check = function(){} 的形式
  #check = () => {
    if (this.name.length < 5) {
      throw new Error('名字长度不能小于5位')
    }
    return true;
  }
}

let hd = new User('后盾人123');
hd.check(); // 此时报错
console.log(hd);