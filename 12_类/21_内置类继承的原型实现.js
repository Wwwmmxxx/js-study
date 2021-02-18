function Arr(...args) {
  args.forEach(item => this.push(item));
  this.first = function () {
    return this[0];
  }
  this.max = function () {
    return this.sort((a, b) => b - a)[0];
  }
}

Arr.prototype = Object.create(Array.prototype);

let hd = new Arr(1, 2, 3, 4, 5, 6, 1, 3);

console.dir(Arr);
console.log(hd.first());
console.log(hd.max());

//----------------------------------------------------------
class Arr2 extends Array{
  constructor(...args){
    super(...args);
  }
  first () {
    return this[0];
  }
  max () {
    return this.sort((a, b) => b - a)[0];
  }
}

let hd2 = new Arr2(1,2,3,4,5,21,1,23);
console.log(hd2.first());
