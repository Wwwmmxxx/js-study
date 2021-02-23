let hd = `
  <h1>houdunren</h1>
  <span>后盾人</span>
  <h2>hdcms</h2>
`;

let reg = /<(h[1-6])>([\s\S]+)<\/\1>/ig
// 利用正则的特性,如果想要提取中间的某个值的话,也可以使用原子组
// 业务场景,将h标签替换为p标签
// $2表示第二个原子组
hd.replace(hd.replace(reg,'<p>$2</p>'))

// p0表示第一个字符串
// p1表示第一个原子组
// p2表示第二个原子组
hd.replace(reg,(p0,p1,p2)=>{
  return `<p>${p2}</p>`
})
