function Hd(name){this.name = name;}
Hd.prototype.show = function(){}
let h = new Hd('徐逸飞');
for (const key in h) {
  // 此时能够遍历出show方法
  console.log(key); 
}
// 此时可以看到,enumerable属性为true , 所以可以遍历
// {
//   value: [Function],
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
console.log(Object.getOwnPropertyDescriptor(Hd.prototype,'show',null,2))

// 所以原先在函数中可以使用以下这种方式 , 不遍历到原型中的方法
for (const key in h) {
  if (Object.hasOwnProperty(key)) {
    console.log(key);
  }
}

//------------------------------------------------------------------------------------
// 在类中
class User{
  constructor(name){
    this.name = name;
  }
  show(){}
}
// 此时可以看到enumerable:false , 所以该元素无法被遍历到
// {
//   value: [Function: show],
//   writable: true,
//   enumerable: false,
//   configurable: true
// }
console.log(Object.getOwnPropertyDescriptor(User.prototype,'show',null,2));

let u = new User('徐逸飞2');
for (const key in u) {
  console.log(key); // 因为不可遍历 , 所以此时只有name
}