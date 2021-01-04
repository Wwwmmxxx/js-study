let arr = [];
for (let i = 1; i < 3; i++) {
  // 将函数压到环境中 , 此时i将会被保留下来
  arr.push(function () {
    return i;
  })
}
console.log(arr[0]());
console.log(arr[1]());


// 使用var的情况
let arr = [];
for (var i = 1; i < 3; i++) {
  (function(i){
    arr.push(function(){
      return i;
    })
  })(i);
}
console.log(arr[0]());
console.log(arr[1]());