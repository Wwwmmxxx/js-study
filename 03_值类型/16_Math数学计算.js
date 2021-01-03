// 取得最大值,最小值
Math.max(1, 2, 3, 4, 5, 5);
Math.min(1, 2, 3, 4, 5, 5);

// 从数组中取得最大值
let grade = [12, 3, 5, 6];
// apply函数可以理解为转为一个数组
console.log(Math.max.apply(null, grade));
console.log(Math.max(...grade))

// 向上取整
Math.ceil(5.01);
// 向下取整
Math.floor(5.56);
