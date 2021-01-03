let arr = ["hdcms", "houdunren"];

// 方法一:
arr[arr.length] = "cms";
// 方法二: 返回数组元素的个数
arr.push("shop", "php");
// 方法三:
let arr2 = ['custom'];
arr.push(...arr2);

console.log(arr);