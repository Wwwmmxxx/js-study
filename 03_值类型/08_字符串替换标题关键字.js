const hd = "houdunren.com";
console.log(hd.replace("houdunren", "hdcms"));

const word = ['php', 'css'];
const string = "php and css";
// pre表示上一次的返回值 , 第一次使用函数的第二个参数
const replaceString = word.reduce((pre, word) => {
  return pre.replace(word, `<a href="?w=${word}">${word}</a>`,)
}, string);
console.log(replaceString)