class User{
  static site = 'houdunren.com';
  static show(){
    console.log('user.static.show()')
  }
}

class Admin extends User{

}

Admin.show()

//-----------------------分析---------------------
// function User(){

// }

// User.site = '后盾人';
// User.show = function(){
//   console.log('User.static.method()')
// }

// function Admin(){}

// Admin.__proto__ = User;

// Admin.show();