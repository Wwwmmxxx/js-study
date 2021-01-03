// 内部自定义Symbol.toPrimitive,来处理所有的转换
let obj = {
  num: 1,
  [Symbol.toPrimitive]() {
    return this.num;
  }
}

console.log(obj + '1');