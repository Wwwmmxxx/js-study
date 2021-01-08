'use strict'
// 隐藏了属性值_name
const user = {
  get name() {
    return this._name;
  },
  set name(value) {
    if (value.length <= 3) {
      throw new Error('用户名小于三位');
    }
    this._name = value;
  }
};
// user.name = '后盾人教程';
console.log(user.name);