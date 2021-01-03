let arr = [1, 2, 3];

// 有一个为假则返回假 , 全部为真则返回真
let status1 = arr.every((value, index, arr) => {
  console.log(value);
  return true;
});

// 有一个为真则返回真 , 全部为假返回假
let status2 = arr.some((value, index, arr) => {
  console.log(value);
  return false;
})

// 过滤 , 返回true则表示需要 , 返回false则不需要
let newArr = arr.filter((value, index, arr) => {
  return true;
});
