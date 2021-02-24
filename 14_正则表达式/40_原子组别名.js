let hd = `
<h1>houdunren</h1>
<h1>houdunren</h1>
<h1>houdunren</h1>
`

const reg1 = /<(h[1-6])>(.*?)<\/\1>/ig;
console.log(hd.replace(reg1,'<h4>$2</h4>'));

// 如果觉得数字编号太多了 可以对一个原子组起别名
// 使用?<>
const reg2 = /<(h[1-6])>(?<con>.*?)<\/\1>/ig;
console.log(hd.replace(reg2,'<h4>$<con></h4>'));