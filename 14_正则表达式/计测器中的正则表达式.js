let str1 = "0106-5654-001 20200126";
let reg = /\d{4}\-\d{4}\-\d{3}/;
console.log(reg.test(str1));