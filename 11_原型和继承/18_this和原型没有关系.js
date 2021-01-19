let hd = {
  name: 'Houdunren',
  show() {
    console.log(this.name);
  }
}

let User = {
  name:'向军'
}

Object.setPrototypeOf(hd,User);
// 此时this始终指向当前操作的对象
console.log(hd.show());

