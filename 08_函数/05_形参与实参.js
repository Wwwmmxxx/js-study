// 当实参大于形参时,只赋值对应数量的形参
// 当形参大于实参时,大于实参的部分将赋值为undefined
function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2));

// 默认参数 , 位置必须放在最后
// 2.在新版本中可以直接在形参中赋值
function avg(total, year = 2) {
  year = year || 1; // 1.使用||运算符完成默认值
  return Math.round(total / year);
}

console.log(avg(2000));

// 案例1 : 默认升序函数
function sortArray(array, type = "asc") {
  return array.sort(function (a, b) {
    return type == 'asc' ? a - b : b - a;
  })
}
console.log(sortArray([3,2,4,12,3,4,2],"desc"))
