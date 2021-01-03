// bind
function show() {
  console.log(this.name);
}

// 使用call或者apply会立刻执行
// show.call({name:'后盾人'})
// 使用bind会得到一个新的函数 , 如果想要立即执行 , 则可以在后面加一个括号
show.bind({ name: 'hdcms' })();

let a = function () { };
let b = a;
// 此时是地址赋值 , 所以返回true
console.log(a === b)
b = a.bind();
// 此时是重新复制一份 , 所以返回false
console.log(a === b);

// 案例
function hd(a, b) {
  return this.f + a + b;
}

console.log(hd.call({ f: 1 }, 1, 1));
console.log(hd.apply({ f: 1 }, 2, 2));
let func = hd.bind({ f: 1 }, 3, 3);
func(5, 5); // 这个地方传递了 5,5 因为以前已经有 3 ,3 . 所以会忽略这里的参数

// 案例
// <button>后盾人</button>
// 类似于这种时候 , 使用比较方便 , 因为不需要马上执行
document.querySelector('button').addEventListener('click',function(){
  
}.bind({url:'houdunren.com'}));
