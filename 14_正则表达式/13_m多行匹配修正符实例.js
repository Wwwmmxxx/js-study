let hd = `
#1 js,200元 #
#1 php,300元 #
#1 houdunren.com # 后盾人
#1 node.js,180元 #
`

let lessons = hd.match(/^\s*#\d+\s+.+\s+#$/gm).map(v=>{
  v = v.replace(/\s*#\d+\s*/,'').replace(/\s+#/,"");
  [name,price] = v.split(',');
  return {name,price};
})
console.log(JSON.stringify(lessons))
