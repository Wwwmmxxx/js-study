// 元字符
let hd = "houdunren 2010";
// \d匹配数值
// g表示全局 , 匹配到结尾
// +表示1个或者多个
console.log(hd.match(/\d+/g));

let hd2 = `
  张三:070-99999999,
  李四:080-88888888
`;

// 此时只能匹配到一个 , 使用g则可以匹配到全部
console.log(hd2.match(/\d{3}-\d{7,8}/));
console.log(hd2.match(/\d{3}-\d{7,8}/g));
// 在原子表中,使用^,匹配中文,表示除了-,\d,:,\s我都要
console.log(hd2.match(/[^-\d:,\s]+/g));

// \D表示除了数字
console.log(hd.match(/\D/g))

// \s表示空白和换行符
// \S表示除了空白和换行符
console.log(/\s/.test('hd '));

