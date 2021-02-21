let hd = `
<span>
  houdunren @@
  hdcms
</span>
`
console.log()

let xj = 'ab';
// 原子表 => 匹配任意
console.log(xj.match(/[ab]/))
// 利用这一个特性 , 读取全部内容 , [\d\D] 或者 [\s\S] 等都可以一
console.log(hd.match(/<span>[\d\D]+<\/span>/));





