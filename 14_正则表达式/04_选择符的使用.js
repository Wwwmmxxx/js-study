let tel = "010-9999999";
// 可以发现这种情况下 010 也是能通过审查的
// 因为此时正则表达式会间隙为: 1. 010 2.020\-\d{7,8}
console.log(/010|020\-\d{7,8}/.test(tel));

// 此时可以将其拆分成两个
console.log(/010\-\d{7,8}|020\-\d{7,8}/.test(tel));

// 出现了两个相同的部分,此时可以使用原子组
// 此时表示010与020是一个整体
console.log(/(010|020)\-\d{7,8}/.test(tel));