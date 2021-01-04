function hd() {
  let n = 1;
  // 将其返回给外部
  return function sum() {
    let title = '后盾人';
    console.log(++n);
  }
}
let a = hd(); //此时从hd()中获取了sum() , 所以该内存地址会一直被保留
a(); // 2
a(); // 3
let b = hd();
b(); // 因为是新的 , 所以此时b为2


// 更复杂的案例
function hd1(){
  let n =1 ;
  return function show1(){
    let m = 1;
    return function show2(){
      console.log(++m);
    }
  }
}
// 这个地方获取到了function show2() , 在show2()方法内部定义了++m , 使用到了 m 变量
// 使用到了return关键字 , 所以导致了show1()的生命周期被延长
// 同理hd1()
let c = hd1()(); 
c();// 2
c();// 3