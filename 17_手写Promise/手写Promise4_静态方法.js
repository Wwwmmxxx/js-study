// 在Promise中有一个特性 , 虽然在then方法中能够获取到当前的对象 , 但是是不能返回的.
// 所以需要做返回类型约束

class HD {
  static PENDING = 'pending';
  static FULFILLED = 'fulfilled';
  static REJECTED = 'rejected'
  constructor(executor) {
    this.status = HD.PENDING;
    this.value = null;
    this.callbacks = [];
    try {
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }
  resolve(value) {
    if (this.status == HD.PENDING) {
      this.status = HD.FULFILLED;
      this.value = value;
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
      onFulfilled = () => this.value;
    }
    if (typeof onRejected != "function") {
      onRejected = () => this.value;
    }
    let promise = new HD((resolve, reject) => {
      if (this.status == HD.PENDING) {
        this.callbacks.push({
          onFulfilled: value => {
            this.parse(promise, onFulfilled(value), resolve, reject);
          },
          onRejected: value => {
            this.parse(promise, onRejected(value), resolve, reject);
          }
        })
      }
      if (this.status == HD.FULFILLED) {
        setTimeout(() => {
          parse(promise, onFulfilled(this.value), resolve, reject)
        });
      }
      if (this.status == HD.REJECTED) {
        setTimeout(() => {
          parse(promise, onRejected(this.value), resolve, reject);
        });
      }
    })
    return promise;
  }
  parse(promise, result, resolve, reject) {
    if (promise === result) {
      throw new TypeError("Chaining cycle detected");
    }
    try {
      if (result instanceof HD) {
        result.then(resolve, reject);
      } else {
        resolve(result);
      }
    } catch (error) {
      reject(error);
    }
  }
  // 对于静态方法resolve/reject而言 , 参数既可以是普通参数 , 也可以是Promise对象.
  // 如果是普通参数 , 那么就默认为成功
  // 如果是Promise对象 , 那么如果失败了 , 就会执行error
  // let p = new Promise((resolve,reject)=>{
  //   reject();
  // })
  // Promise.resolve(p).then(value=>{
  //   console.log(value);
  // },error=>{
  //   console.log(error);
  // })
  static resolve(value) {
    return new HD((resolve, reject) => {
      if (value instanceof HD) {
        value.then(resolve, reject);
      } else {
        resolve(value)
      }
    })
  }
  static reject(value) {
    return new HD((resolve, reject) => {
      reject(value);
    })
  }
  // all方法有一个失败,则失败
  // Promise.all([p1, p2]).then(value => {
  //   console.log(value);
  // }, reason => {
  //   console.log(reason);
  // });
  static all(promises) {
    const values = [];
    return new HD((resolve, reject) => {
      promises.forEach(element => {
        promises.then(value => {
          values.push(value);
          if (values.length === promises.length) {
            resolve(values);
          }
        }, reason => {
          reject(reason);
        })
      });
    })
  }
  // race方法,谁快用谁
  // Promise.race([p1,p2]).then()
  static race(promises) {
    // 在下面的代码中 , 可以正常执行的原因是 , Promise状态的变更只能进行一次
    // 所以后面再resolve()/reject()都已经没有用了.
    return new HD((resolve, reject) => {
      promises.map(promise => {
        promise.then(value => {
          resolve(value);
        }, reason => {
          reject(value);
        })
      })
    })
  }
}