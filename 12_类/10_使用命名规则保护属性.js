// 只有一个保护属性时
const HOST = Symbol('主机');

// 若有多个保护函数时
const PROTECTEDS = Symbol();

class Common {
  constructor(){
    this[PROTECTEDS] = {};
    this[PROTECTEDS].host = 'www.houdunren.com'
  }
  // 保护属性 : 第二种方式,使用Symbol定义protected属性
  // 请勿直接使用HOST , 在类内HOST会直接作为字符串使用
  // 需要注意此时User类(子类)是可以访问的 => 即为保护属性的概念
  
  [HOST] = 'www.hdcms.com'

  get host() {
    return this[PROTECTEDS].host;
  }
}

class User extends Common {
  constructor(name) {
    super();
    // 开放属性
    this.name = name;
  }
  // 开放属性
  site = '后盾人';

  // 保护属性: 第一种方式,使用命名上的约定 ,作为开发者的默认约定
  _url = 'www.baidu.com'

  set url(url) {
    if (!/^https?:/i.test(url)) {
      throw new Error('错误Url');
    }
    this._url = url;
  }

}

let hd = new User('后盾人');
hd.name = '徐逸飞';
console.log(hd);
console.log(hd.host);
