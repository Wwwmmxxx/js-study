let hd = {
  data: [1, 2, 3, 45, 21, 31, 24, 123]
};

console.log(Math.max.apply(null,hd.data));

let xj = {
  lessons: { js: 87, php: 63, node: 99, linux: 88 },
}

console.log(Math.max.apply(null,Object.values(xj.lessons)));

