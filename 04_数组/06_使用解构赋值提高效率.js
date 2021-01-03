let arr = ['后盾人', 2010];

// 起先的方法
let name = arr[0];
let year = arr[1];
console.log(name, year);

// 解构的方法
let [name1, year1] = arr;
console.log(name1, year1);

// 可以将解构用于函数的返回值
function get() {
  return ['后盾人', 2010]
}
let [name2, year2] = get();
console.log(name2, year2);

// 可以不写var,const,let
// 但是在严格模式下,不能这样写
[name3, year3] = ['后盾人', 2010];
console.log(name3, year3);

// 解构用于字符串
const [...arr2] = "hdcms";
console.log(arr2);

// 如果只想要年份
let [, year4] = ["后盾人", 2010];
console.log(year4);

// 解构与展开语法的整合运用 , 
let [name5,...args] = ['后盾人','houdunren.com',2010];
console.log(args) // 输出[ 'houdunren.com', 2010 ]

// 设置默认值
let [name6,year6 = 2010] = ["后盾人"];
console.log(year6);

// 此时会将数组再嵌套一层数组 
function show(...args){
  console.log(args); // 返回值 : [ [ '后盾人', 2010 ] ]
}

show(["后盾人",2010]);
