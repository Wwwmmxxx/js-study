// 在页面初始化时 , 全局环境下 , this === window
console.log(window);
console.log(this);

// 函数内的this 指向 window
// 方法内的this 指向 对象
let obj = {
  site: '后盾人',
  // 对象中的函数 , 我们一般称之为方法
  show() {
    function render(){
      // 此时的this指当前window
      console.log(this);
    }
    render();
    // 此时this指当前对象
    return this.site;
  }
}

console.log(obj.show());

function User(name){
  this.name = name;
  this.show = function(){
    return this.name;
  };
}

 let lisi = new User('里斯');
 console.log(lisi.show())