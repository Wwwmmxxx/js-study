// Class关键字作用与04相同

'use strict'
const Data = Symbol();
class User{
  constructor(name,age){
    this[Data] = {name,age};
  }
  get name(){
    return this[Data].name;
  }
  set name(value){
    if(value.trim() == "") throw new Error('无效用户名');
    this[Data].name = value;
  }
  // get age(){
  //   return this[Data].age;
  // }
  set age(value){
    if(value.trim()=="")throw new Error('无效年龄');
    this[Data].age = value;
  }
}

let hd = new User('徐逸飞',33);
console.log(hd.name);
console.log(hd.age); // 返回undefined , 由于age被封装在内部
hd.name = '徐逸飞2';
console.log(hd.name);
console.log(hd);