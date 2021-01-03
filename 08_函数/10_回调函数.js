function a(b){
  b('i am in a function');
}

function b(str){
  console.log(str);
}

a(b);