// ?<!
let hd = "hdcms99houdunren";

let reg = /(?<!\d)[a-z]+/i;

console.log(hd.match(reg));