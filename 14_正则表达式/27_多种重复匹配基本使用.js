let hd = 'hddddd';
// +号表示1个或者多个,只能影响一个字符
// *号表示0个或者多个,只能影响一个字符
// {x,y}表示限定数量(x-y),{x,}表示限定数量(x-无数个)
// ?号表示0个或者1个,只能影响一个字符
// 需要注意,这里都是贪婪的匹配模式
console.log(hd.match(/hd+/))
console.log(hd.match(/hd*/))
console.log(hd.match(/hd{1,3}/))