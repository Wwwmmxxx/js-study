let hd = {
  name: "后盾人",
  num: 1,
  valueOf: function () {
    console.log("valueOf");
    return this.num;
  },
  toString: function () {
    console.log("toString");
    return this.name;
  }
};
console.log(hd + 3); //valueOf 4
console.log(`${hd}向军`); //toString 后盾人向军