{/* <span>houdunren</span>
<span>hdcms.com</span>
<span>houdunren.com</span> */}

let reg = /<(h[1-6])([\s\S]+?)<\/\1>/ig
const body = document.body;
// 这个时候我想获取其中的内容
// 那么只要不使用g模式时,才可以获取匹配出来的原子组
// 如果使用了g模式,那么最终输出所有匹配的数组,而不会包含匹配的原子组
console.log(body.innerHTML.match(reg));

// 针对这种问题,最新版的浏览器可以使用matchAll,可以拿到一个迭代对象
const hd = body.innerHTML.matchAll(reg);
// 迭代器可以进行遍历
for(const iterator of hd){
  // 这样就可以得到结果了
  console.log(iterator[2]);
}