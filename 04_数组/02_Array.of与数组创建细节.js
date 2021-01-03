let array = [1, 3, 4];
array[4] = 'houdunren';
console.log(array) // 系统会自动填充这个值 , 第三个值会定义为undefined

let array2 = new Array(1, 23, 34, 4);
let array3 = new Array(6); // 表示创建6个空元素
console.log(array3.length); // 此时为6

let array4 = Array.of(1, 2, 34, 4);
let array5 = Array.of(6); // 表示创建一个元素 , 且值为6
console.table(array5)