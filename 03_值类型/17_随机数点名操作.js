// >=0 ~ <1
Math.random();

// 0 ~ 5 
// Math.floor(Math.random()*(Max)) => 不包含5;
// Math.floor(Math.random()*(Max+1)) => 包含5;
console.log(Math.floor(Math.random() * (5 + 1)));

// 2 ~ 5
// min + Math.floor(Math.random()*(Max-min)) => 不包含5
// min + Math.floor(Math.random()*(Max-min+1)) => 包含5
console.log(2 + Math.floor(Math.random() * (5 - 2)))

// 封装函数
function arrayRandomValue(array, start = 1, end) {
  end = end ? end : array.length;
  start --;
  const index = start + Math.floor(Math.random() * (end - start));
  return array[index];
}