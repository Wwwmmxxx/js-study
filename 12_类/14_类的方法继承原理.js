function User(){}

User.prototype.show = function(){
  console.log('后盾人')
}

function Admin(){}

Admin.prototype = Object.create(User.prototype);

let hd = new Admin();
hd.show();

//---------------class结构--------------
class User1{
  show(){
    console.log('后盾人');
  }
}

class Admin1 extends User{

}

console.log(Admin) // 此时能够在Admin的prototype中依旧能够看到show方法
