// this表示当前对象的引用,在代码内应当只是用this而不使用变量名
// 不同对象的this指向各自的对象

let obj1 = {
  name: 'xuyifei',
  get() {
    return obj1.name;
  }
}

console.log(obj1.get())

// 不使用this时的错误情况
let obj2 = obj1;
obj1 = null;
console.log(obj2.get()) // 此时报错 , 因为obj1此时已经不存在 , 导致obj1.name无法获取