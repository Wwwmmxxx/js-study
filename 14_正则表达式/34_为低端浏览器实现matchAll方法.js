String.prototype.matchAll = function (reg) {
  let res = this.match(reg);
  // 匹配到最后,如果没有的话就会返回null值,从而结束递归调用
  if (res) {
    let str = this.replace(res[0], '^'.repeat(res[0].length));
    let match = str.matchAll(reg) || [];
    return [res, ...match];
  }
}

let hd = 'houdunren';
console.log(hd.matchAll(/u/i));