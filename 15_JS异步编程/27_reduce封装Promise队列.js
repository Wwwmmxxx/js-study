function queue(num) {
  num.reduce((promise, n) => {
    return promise.then(() => {
      return new Promise(resolve => {
        setTimeout(()=>{
          console.log(n);
          resolve();
        },1000)
       });
    })
  }, Promise.resolve())
}
queue([1,2,3,4,5,6])