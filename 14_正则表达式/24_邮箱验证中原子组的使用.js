// <input type="text" name="mail">

let mail = document.querySelector("[name='mail']").value;
// 在原子组中使用|符号,表示或
// 需要注意此时(com|org|cc|cn|net)是一个整体
// 如果不使用空号 => /^[\w-]+@[\w-]+\.com|org$/i
// 那么此时就会有问题,当正则表达式匹配org时,也能成功,因为|前面的内容变成了一个整体
let reg = /^[\w-]+@[\w-]+\.(com|org|cc|cn|net)$/i
// 但是遇到12312312@ricoh.com.cn时就会出现问题,因为后面又多了点,改善如下
// 将[\w-]+\.变为原子组,且可以出现多次
let reg = /^[\w-]+@([\w-]+\.)+(com|org|cc|cn|net)$/i
console.log(mail.match(reg));