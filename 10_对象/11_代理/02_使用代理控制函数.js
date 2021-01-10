// 使用代理函数 , 计算出一个函数需要执行的时间
function factorial(num) {
  return num === 1 ? 1 : num * factorial(num - 1);
}

let proxy = new Proxy(factorial,{
  apply(func,obj,args){
    console.time('run');
    func.apply(this,args); //执行函数
    console.timeEnd('run');
    // console.log(func);
    // console.log(args); //传递一个数组
  }
})

// proxy(5);// 这个时候传递一个数组5
proxy.apply(this,[10]);