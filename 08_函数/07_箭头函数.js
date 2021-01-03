let hd = function () {
  return 1 + 2;
}
console.log(hd());

let hd1 = () => {
  return 1 + 2;
}
console.log(hd1());

let hd2 = () => 1 + 2;
console.log(hd2());

let hd3 = [1, 2, 3, 4, 5, 1, 2].filter(value => value <= 3)
console.log(hd3)