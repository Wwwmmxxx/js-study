function hd(name) { }

console.log(hd.toString()); // function hd(name) { }
console.log(hd.length); // 1

// 函数是由系统内置的Function构造函数创建的
console.log(hd.constructor);

// 使用内置构造函数创建函数
const User = new Function(`name`, `
  this.name=name;
  this.show = function(){
    return this.name
};`);

const lisi = new User('李四');
console.log(lisi.show());