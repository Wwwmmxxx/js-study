// 1. 使用Symbol可以解决在保存数据时由于名称重复造成的耦合覆盖的情况

// 一个缓存类
class Cache {
  static data = {};
  static set(name, value) {
    this.data[name] = value;
  }
  static get(name) {
    return this.data[name];
  }
}

let user = {
  name: "后盾人",
  key: Symbol("缓存")
};

let cart = {
  name: "购物车",
  key: Symbol("购物车")
};

// 将对象中的key作为name,对象整体作为value塞到data中
// 由于key为Symbol对象,具有不可重复性,所以可以保存多个相同的值
Cache.set(user.key, user); 
Cache.set(cart.key, cart);
console.log(Cache.get(cart.key));
console.log(Cache.get(user.key));