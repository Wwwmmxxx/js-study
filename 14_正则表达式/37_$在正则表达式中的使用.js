let tel = '2030/12/18';
console.log(tel.replace(/\//g,'-'));

let hd = '(010)99999999 (020)88888888';
let reg = /\((\d{3,4})\)(\d{7,8})/g;
console.log(hd.match(reg))
// 这里的$1,表示(\d{3,4})
// $2,表示(\d{7,8})
console.log(hd.replace(reg,"$1-$2"));

let hd2 = '=后盾人=';
// $& => 匹配到的内容
console.log(hd2.replace(/后盾人/,'$&'))
// $` => 匹配$前面的内容
console.log(hd2.replace(/后盾人/,'$`'))
// $' => 匹配$后面的内容
console.log(hd2.replace(/后盾人/,"$'"))