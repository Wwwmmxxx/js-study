let hd = 'hoUdUnren';

// i模式 => 不区分大小写
console.log(hd.match(/u/i));

// g模式 => 匹配全部
console.log(hd.match(/U/g));

// 模式是可以组合使用的 , 前后顺序任意
console.log(hd.match(/u/ig));
