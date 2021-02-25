let main = `
<a href="https://www.houdunren.com/1.jpg">1.jpg</a>
<a href="https://oss.houdunren.com/2.jpg">2.jpg</a>
<a href="https://cdn.houdunren.com/3.jpg">3.jpg</a>
<a href="https://houdunren.com/4.jpg">后盾人</a>
`
// 目标:同一变成oss前缀

// 这里一定要.+?,禁止贪婪,否则会匹配到后面</a>内/的位置
const reg = /https:\/\/([a-z]+?)(?<!oss)\..+?(?=\/)/gi

main = main.replace(reg, v => {
  console.log(v);
  return 'https://oss.houdunren.com'
})

console.log(main);
