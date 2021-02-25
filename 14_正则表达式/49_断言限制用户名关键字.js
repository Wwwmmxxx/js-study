const a = 'aaaa'

// 在开始的后面任何位置不能出现"向军",总长度在5-6
const reg = /^(?!.*向军.*)[a-z]{5,6}$/i

console.log(reg.test(a));