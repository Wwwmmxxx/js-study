// 也可以使用WeakMap设置保护属性
const host = new WeakMap();

// 多个属性时时
const protecteds = new WeakMap();
class Common {
  constructor() {
    host.set(this, 'https://houdunren1.com')
    protecteds.set(this, {
      host: 'https://houdunren2.com'
    })
  }
  set host(url) {
    // 针对单个
    // host.set(this,url);
    // 针对多个
    protecteds.set(this, { ...protecteds.get(this), url });
  }
  get host() {
    // 针对单个
    // return host.get(this);
    // 针对多个
    return protecteds.get(this)['host'];
  }
}

class User extends Common {
  constructor(name) {
    super();
    this.name = name;
  }
}

let hd = new User('后盾人');
console.log(hd.host);

// 我们是可以通过host.set方法修改的
// 但是 , 在实际编程过程过 , 会使用到模块化的概念 , 到时候host就会变为不可见的
// host.set(hd,'abc');

let xj = new User('徐逸飞');
console.log(xj.host); // 注意这里的hd.host与xj.host是不同的 , 这是由于WeakMap的特性所决定的