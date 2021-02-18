function User() { }

function Admin() { }

Admin.prototype = Object.create(User.prototype);

let hd = new Admin();
console.log(hd instanceof Admin); // true
console.log(hd instanceof User); // true

// 递归调用实现Instaceof
function checkPrototype(obj, constructor) {
  if (!obj.__proto__) return false;
  if (obj.__proto__ == constructor.prototype) return true;
  return checkPrototype(obj.__proto__,constructor);
}

console.log(checkPrototype(hd,User));

//-----------------------在类中的实现----------------------------
class User{}

class Admin extends User{}

let hd = new Admin();

console.log(hd instanceof Admin);