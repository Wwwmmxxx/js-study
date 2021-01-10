'use strict'
const hd = {name:'后盾人'};
const proxy = new Proxy(hd,{
  // 第一个参数是对象 , 第二个参数是属性
  get(obj,property){
    return obj[property];
  },
  set(obj,property,value){
    obj[property] = value;
    return true; // 在严格模式下必须返回true
  }
})

console.log(proxy.name);
proxy.name = '徐逸飞';
console.log(proxy.name);
console.log(proxy);