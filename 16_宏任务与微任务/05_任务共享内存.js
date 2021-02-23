let i = 0;

// 在宏任务队列中也能共享主线程的内存
setTimeout(() => {
  console.log(++i);
}, 1000);

setTimeout(() => {
  console.log(++i);
}, 1000);
