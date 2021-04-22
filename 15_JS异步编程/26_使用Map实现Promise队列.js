// 依次打印出来数组中的数字,实现队列的效果
function queue(num) {
  let promise = Promise.resolve();
  num.map(v => {
    // promise = promise.then()是关键,保证了按顺序一个个出现
    promise = promise.then(() => v())
  })
}

// queue([1, 2, 3, 4, 5, 6]);
queue([p1, p2]);

function p1() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('p1');
      resolve();
    }, 1000);
  })
}

function p2() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('p2');
      resolve();
    }, 1000);
  })
}