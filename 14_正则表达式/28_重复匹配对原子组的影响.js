let hd = 'hddd';
// 如果对原子组使用重复匹配符号,那么就可以影响到一个原子组,而不是单纯的一个字符
console.log(hd.match(/(hd)+/));

let tel = '010-99999999';
console.log(tel.match(/^0\d{2,3}-\d{7,8}$/));