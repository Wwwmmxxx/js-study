let users = `
徐逸飞:13061731270,
后盾人:98745675603
`

let reg = /(?<=\d{7})\d{4}/gi;
users = users.replace(reg,v=>{
  return '*'.repeat(4);
})

console.log(users)