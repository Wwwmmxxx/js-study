// 此时的顺序promise => houdunren.com => serTimeout => success
// 此时并不是宏任务的优先级提升 , 而是由宏任务创建完微任务后 , 执行微任务
let promise = new Promise(resolve => {
  setTimeout(()=>{
    console.log('setTimeout');
    resolve();
  },0);
  console.log('promise');
}).then(value => {
  console.log('success');
});

console.log('houdunren.com')