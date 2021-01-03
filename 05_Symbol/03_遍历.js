// 1.Symbol不能使用forin或forof
let hd = Symbol("this is my house");
let obj = {
  [hd]:"poor guy",
  name:'xuyifei'
}

for (const key in obj) {
  console.log(key); // 此时只能读取到name属性,无法读取到[hd]
}

for(const key of Object.keys(obj)){
  console.log(key); // 即使通过反射,使用Object对象获取Keys(),也无法读取到[hd]
}

// 可以使用Object里面的getOwnPropertySymbol专门获取Symbol属性
for (const key of Object.getOwnPropertySymbols(obj)) {
  console.log(key);
}

// 可以通过Reflect.ownKeys(obj)获取全部属性
for (const key of Reflect.ownKeys(obj)) {
  console.log(key);
}

// Symbol在对象中相当于一个私有属性
// 如果对象中有我们不想遍历的属性, 那我们也可以使用Symbol将其隐藏起来