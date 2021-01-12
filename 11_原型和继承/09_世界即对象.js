function User(name) {
  this.name = name;
  this.show = function () {
    console.log(this.name);
  }
}
let hd = new User('后盾人');

function createByObject(obj, ...args) {
  const constructor = Object.getPrototypeOf(obj).constructor;
  return new constructor(...args);
}

let xj = createByObject(hd, '徐逸飞');
xj.show();