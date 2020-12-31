let info = { name: 'xuyifei', age: 1 };

// 1.对象的解构,将对象中的name复制给loopName,同理age
let { name: loopName, age: loopAge } = info;
console.log(loopName);
console.log(loopAge);

// 2. 函数返回值也可以结构
function hd() {
  return {
    school: "SDJU",
    url: "www.sdju.edu.cn"
  }
}

let { school: s, url: u } = hd();
console.log(s)
console.log(u)

// 3.在函数中使用对象的解构
function hd2({ name, age }) {
  console.log(name, age);
}

hd2({ name: 'shenjunguang', age: '1999' });