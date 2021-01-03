let arr = [1, 2, 3, 4, 5];

// 使用slice时原数组时不改变的 , 方法会返回一个数组
let hd = arr.slice(1, 2);
console.log(hd);

// 使用splice时原数组会改变 , 方法会返回以一个数组
// 第一个参数为起始位置 , 第二个位置为截取几个 , 第三个及以后的参数为添加的元素
arr.splice(1, 1, '后盾人');// 替换
arr.splice(1, 0, "后盾人");// 增加

console.log(arr);
