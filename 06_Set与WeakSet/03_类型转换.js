// Set => Array
let set = new Set(['hdcms', 'houdunren']);
console.log(Array.from(set));
console.log([...set]);

// 只取出小于5的
let hd = new Set("12345678");
hd = new Set([...hd].filter((item) => item < 5));
console.log(hd);

// Array => Set
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 2, 1, 2, 3, 4, 5];
// 对array去重
array = [...new Set(array)];
console.log(array)