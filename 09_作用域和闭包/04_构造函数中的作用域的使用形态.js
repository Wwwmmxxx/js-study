// 使用构造函数的表达方式
function hd1(){
  let n = 1;
  this.sum = function(){
    console.log(++n);
  }
}

let a1 = new hd1();

a1.sum();
a1.sum();

// 上方构造函数按照03节的表达方式

function hd2(){
  let n = 1;
  function sum(){
    console.log(++n);
  }
  return{
    sum
  }
}

let a2 = new hd2();

a2.sum();
a2.sum();