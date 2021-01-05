let arr = [1, 2, 5, 2, 3, 123, 4, 2, 1, 23, 9];

let hd1 = arr.filter(function (v) {
  return v >= 2 && v <= 9;
})

let hd2 = arr.filter(function (v) {
  return v >= 6 && v <= 10;
})

// 可以看到上方的filter函数中,只是由于需要选择的区间不同 , 导致要重复写两次
// 以下使用闭包解决:
function between(a, b) {
  return function (v) {
    return v >= a && v <= b;
  }
}
console.log(arr.filter(between(1, 2)));
console.log(arr.filter(between(6, 10)));
