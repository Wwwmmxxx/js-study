const string = "99";
// 字符串 => 数值
console.log(string * 1 + 78);
console.log(Number(string) + 78);


// 数值 => 字符串
const number = 66;
console.log(number + "");
console.log(String(number));

// 保证字符串的开头为数字的话 , 可以使用parseInt函数转换为数字
const string2 = "99houdunren";
console.log(parseInt(string2));

// 数组 => 字符串 , 使用join();
// 字符串 => 数组 , 使用split();

// 使用String构造函数的话 , 使用typeof 可以看到并不是一个String型 , 而是一个object;
const string3 = new String("houdunren");
console.log(typeof string3);

