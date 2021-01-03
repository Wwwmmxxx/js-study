let a = new Set([1, 2, 3, 4, 5]);
let b = new Set([4, 5, 6, 7, 8]);

// 并集
let c = new Set([...a, ...b]);
console.log(c);

// 差集
let d = [...a].filter(function (item) {
  return !b.has(item);
});
console.log(d);

// 交集
let e = [...a].filter(function (item) {
  return b.has(item);
});
console.log(e);