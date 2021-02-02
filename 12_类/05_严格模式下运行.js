'use strict'
function show(){
  console.log(this);
}

show(); // 此时this显示的是Window

function User(){}
User.prototype.show = function(){
  function test(){
    console.log(this);
  }
  test();
}

let u = new User();
u.show();

class Hd{
  show(){
    function test(){
      // 此时不需要写'use strict'
      // 使用class关键字 , 会自动将类内的内容进行严格模式
      console.log(this);
    }
    test();
  }
}

let hd = new Hd();
hd.show();