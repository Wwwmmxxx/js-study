// apply call bind
// {}
function User(name){
  this.name = name;
  // return{
  //   a:'houdunren'
  // }
}
let lisi = new User('李四');
console.log(lisi);

let hdcms = {url:'hdcms.com'};
// 使用call方法 , 将User中的this指向hdcms
// 所以当执行this.name = name;时 , 也就是 hdcms.name = '开源系统';
User.call(hdcms,'开源系统');
console.log(hdcms);

