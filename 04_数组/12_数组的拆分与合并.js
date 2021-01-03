let arr1 = "hdcms,houdunren";

// 拆分
let arr2 = str.split(',');
console.table(arr2);

// 链接
arr2.join(',')

// 合并 , 使用concat
let arr3 = [1, 2, 3, 4];
let arr4 = arr.concat(arr3);
console.log(arr4);

// 合并, 使用...
let arr5 = [...arr2, ...arr3];
console.log(arr5);

// 复制
let arr6 = [1, 2, 3, 4];
// 参数一:覆盖的起始位置 , 参数二: 复制的起始位置 , 参数三: 复制的终了位置
console.log(arr6.copyWithin(2, 0, 2))




