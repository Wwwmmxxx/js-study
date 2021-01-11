let hd = new Object();
hd.name = '徐逸飞';
console.dir(Object);

Object.prototype.show = function(){
  console.log('houdunren');
}
hd.show();

function User(){}
console.dir(User);

// Object有父级: prototype(供实例化对象用) , __proto__(供自身用)
// Function有父级: prototype(供实例化对象用) , __proto__(供自身用)
// 根据上面的代码 , 可以知道Function的prototype与__proto__的父级就是Object的prototype
// 原因是:在Function的prototype与__proto__中可以找到show()函数
console.log(User.prototype.__proto__ === User.__proto__.__proto__);// 返回true

// Object是没有父级的
console.dir(Object.prototype.__proto__); // 返回null

let xj = new User();
xj.show(); // 由于链条的存在 , 所以此时也能够调用show()方法
User.show(); // 同理
