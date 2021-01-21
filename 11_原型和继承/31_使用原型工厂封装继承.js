// 继承的通用方式
function extend(sub, sup) {
  sub.prototype = Object.create(sup.prototype);
  Object.defineProperty(sub.prototype, 'contructor', {
    value: sub,
    enumerable: false
  })
}

extend(Admin, User);