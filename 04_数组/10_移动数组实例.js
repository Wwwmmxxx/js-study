function move(array, from, to) {
  const newArray = [...array];
  let item = newArray.splice(from, 1);
  // 注意这里需要使用...item , 否则会往数组中塞入一个数组
  newArray.splice(to, 0, ...item);
  return newArray;
}

let array = [1, 2, 3, 4];
console.log(move(array, 1, 3));

