'use strict'

function User() {
  this.show = function () {
    console.log(this)
  }
}

let hd = new User();
// 在严格模式下 , this会变成undefined , 目的是防止修改window对象
hd.show();