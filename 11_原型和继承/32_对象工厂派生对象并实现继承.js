function User(name,age){
  this.name = name;
  this.age = age;
}

function admin(name,age){
  const instance = Object.create(User.prototype);
  User.call(instance,name,age);
  instance.role = function(){
    console.log('role')
  }
  return instance;
}

let hdAdmin = admin('徐逸飞',19);
console.log(hdAdmin);
hdAdmin.role();
