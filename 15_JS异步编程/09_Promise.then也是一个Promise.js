// 一个Resolved对的Promise
let p1 = new Promise((resolve, reject) => {
  resolve('fulfilled');
});

// 此时会返回一个Pending的Promise
let p2 = p1.then(value => {
  console.log(value)
})

// 因为p1中有同步代码块resolve => 导致了状态变更为resolved
console.log(p1) // resolved
// 因为此时p2是一个微任务,此处的console.log位于主线程中,而微任务的优先级小于主线程的任务,导致了p2还没有执行then方法,所以为pending状态
console.log(p2) // pending

setTimeout(() => {
  console.log(p1) // resolved
  // 因为宏任务的优先级低于微任务 , 所以最后执行宏任务时 , 微任务p2已经执行完成了then方法 , 导致了p2的状态变为resolved
  console.log(p2) // resolved
}, 0)