let hd = {
  user:'houdunren',
  get(){    
    // console.log(this.user); // 正确显示houdunren
    return function(){
      return this.user;
    }
  }
}

let a = hd.get();
// 此时会输出Window全局变量 , 由于get()函数返回了一个function函数
// **this不同于其他普通变量 , 不会延伸其作用域**
// 普通的function函数中的this全部指向Windows全局变量
// 这里可以用箭头函数
console.log(a());
