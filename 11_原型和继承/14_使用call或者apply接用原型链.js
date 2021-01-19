// 借的感觉

let hd = {
  data: [1, 2, 3, 45, 21, 31, 24, 123]
};

Object.setPrototypeOf(hd, {
  max1() {
    return this.data.sort((a, b) => b - a)[0];
  },
  max2(data) {
    return data.sort((a, b) => b - a)[0];
  }
})

console.log(hd.max1());
console.log(hd.max1(hd.data));

let xj = {
  lessons: { js: 87, php: 63, node: 99, linux: 88 },
  // getter
  get data(){
    return Object.values(this.lessons);
  }
}

// xj对象想使用max方法
console.log(hd.max1.apply(xj));
console.log(hd.max2.call(null,Object.values(xj.lessons)));
console.log(typeof Object.values(xj.lessons));