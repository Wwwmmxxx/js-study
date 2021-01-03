let hd = "houdunren";
// 只是第一个参数的情况 , 下面三个函数的结果相同
console.log(hd.slice(1)); // oudunren
console.log(hd.substr(1)); // oudunren
console.log(hd.substring(1)); // oudunren
console.log('-----------------------');

// 第二个参数 , substr有别于其他两个方法
console.log(hd.slice(1, 3)); // ou
console.log(hd.substr(1, 3)); // oud , 指往后截取3个
console.log(hd.substring(1, 3)); // ou
console.log('-----------------------');

// 参数为负数
console.log(hd.slice(-3)); // 后往前数3位
console.log(hd.substr(-3)); // 后从往前数3位
console.log(hd.substring(-3)); // 这个函数是不接受负数参数的
console.log('-----------------------');

// 总结
// slice函数控制的是下标
// substr函数,第一个参数控下标位置,第二个参数控制数量
// substring函数基本与slice函数相同,但是不能接收负数为参数


