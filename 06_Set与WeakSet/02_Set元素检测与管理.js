// 此时会将hdcms差分为 h,d,c,m,s作为数组
let set = new Set("hdcms");

// 方法介绍
let set1 = new Set(["hdcms", "houdunren"]);
// 使用set.size获取set的长度
console.log(set1.size);
// 使用has获取是否存在,元素不存在时为false
console.log(set1.has("hdcms"));
// 使用delete方法删除,元素不存在时为false
set1.delete("hdcms"); 
// 使用values方法,查看元素
console.log(set1.values());
// 使用clear方法,彻底清空set
console.log(set1.clear());
