//----------------------原型---------------------
// new Promise((resolve, reject) => {

// })

//----------------------实例---------------------
class HD {
  static PENDING = 'pending';
  static FULFILLED = 'fulfilled';
  static REJECTED = 'rejected'
  constructor(executor) {
    this.status = HD.PENDING;
    this.value = null;
    // 现在使用then会直接直接 , 但是当executor中包含有异步的任务时 , 此时then中的this.value会是等待中 , 那么二者的时间就无法完全吻合 , 所以需要用一个回调函数 , 当executor执行完成后,再执行.
    this.callbacks = [];
    // 此处必须使用.bind(this) , 用以绑定resolve和reject方法的this为当前对象
    // 否则的话 , 此时就将会是window对象
    // executor(this.resolve,this.reject);
    try {
      // 如果出现了其他错误 , 那么直接拒绝
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }
  resolve(value) {
    if (this.status == HD.PENDING) {
      // 只有等待状态才能修改
      this.status = HD.FULFILLED;
      this.value = value;
      // 正常的Promise中若存在异步任务 ,则根据宏任务的微任务的概念
      // new Promise((resolve,reject)=>{
      //   setTimeout(()=>{
      //     resolve('解决');
      //     console.log('2')
      //   },1000);
      // }).then(value=>{
      //   console.log('3');
      // })
      // console.log('1')
      // 此时输出: 1 => 2 => 3
      // 第一次任务轮询: 优先执行同步代码,
      // 第二次任务轮询: 执行异步代码,
      // 第三次任务轮询: 执行resolve/reject方法
      // 所以回调的方法应该放到第三次轮询中
      setTimeout(() => {
        this.callbacks.map(callback => {
          callback.onFulfilled(this.value);
        })
      })
    }
  }
  reject(reason) {
    if (this.status == HD.PENDING) {
      this.status = HD.REJECTED;
      this.value = reason;
      setTimeout(() => {
        this.callbacks.map(callback => {
          callback.onRejected(reason);
        })
      })
    }
  }
  then(onFulfilled, onRejected) {
    if (typeof onFulfilled != "function") {
      // 真实的时候 , then方法内是可以没有Fulfilled方法的
      // 当没有时 , 使用默认函数
      // 又因为Promise中的then具有穿透机制 , 所以这里直接将类中的this返回给下一个then处理即可
      onFulfilled = () => this.value;
    }
    if (typeof onRejected != "function") {
      // 真实的时候 , then方法内是可以没有Fulfilled方法的
      // 当没有时 , 使用默认函数
      onRejected = () => this.value;
    }
    // 为了能够使用链式调用 , 返回一个HD对象
    return new HD((resolve, reject) => {
      // 为什么需要这一步呢? 因为有可能此时状态是PENDING的 , 还未发生改变 , 正在等待Executor中执行改变状态的方法
      if (this.status == HD.PENDING) {
        // 那么由于延后执行了, 实际上也有可能会出现错误 , 所以作为回调函数
        // this.callbacks.push({ onFulfilled, onRejected })
        // 所以变更为
        this.callbacks.push({
          onFulfilled: value => {
            try {
              let result = onFulfilled(value);
              if(result instanceof HD){
                result.then(resolve,reject);
              }else{
                resolve(result); 
              }
            } catch (error) {
              // 下一个then是对上一个then的后续处理 , 所以当第一个then出现异常错误时,应该由第二个then接受并处理,所以此处原本是onRejected(error),改为reject,同下
              reject(error);
            }
          },
          onRejected: value => {
            try {
              let result = onRejected(value);
              if(result instanceof HD){
                result.then(resolve,reject);
              }else{
                resolve(result);
              }
            } catch (error) {
              reject(error);
            }
          }
        })
      }

      if (this.status == HD.FULFILLED) {
        // 此处的setTimeout是为了保证与Promise类似,将方法放到任务队列中
        setTimeout(() => {
          // 此处的trycatch针对onFulfilled中存在语法错误时
          try {
            // 当状态为FULFILLED时
            let result = onFulfilled(this.value); // 这个result是then函数中返回值 , 在Promise中为: then(value => return '1',error => console.log(error));
            if (result instanceof HD) {
              //如果返回的是一个Promise对象 , 这里的resolve和reject,实际上是当前then的.所以是可以优化的 , 关键的是要去改变上一个Promise的状态 , 供给到下一个Promsie
              // result.then(value => {
              //   resolve(value);
              // }, reason => {
              //   reject(reason)
              // })
              result.then(resolve,reject);
            } else {
              // 如果返回的是一个普通对象
              resolve(result)//再改变当前Promise的状态 , 因为在成功中始终都是成功
            }
          } catch (error) {
            reject(error);
          }
        })
      }
      if (this.status == HD.REJECTED) {
        // 此处的setTimeout理由同上,变为异步
        setTimeout(() => {
          // 此处的trycatch针对REJECTED方法中存在错误
          try {
            // 当状态为REJECTED时
            let result = onRejected(this.value);
            if(result instanceof HD){
              result.then(resolve,reject);
            }else{
              resolve(result); // 第一个then的成功或失败不会影响到第二个then , 所以这里使用及时第一个then失败了也是用resolve就可以
            }
          } catch (error) {
            reject(error)
          }
        })
      }
    })

  }
}

let p = new HD((resolve, reject) => {
  // resolve('解决');
  reject('失败');
}).then(
  value => {
    console.log(value);
    return '徐逸飞'
  },
  reason => {
    console.log(reason);
    return '失败2'
  }
).then(
  value => {
    console.log(value);
  }
)