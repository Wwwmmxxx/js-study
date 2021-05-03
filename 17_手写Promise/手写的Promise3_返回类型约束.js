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
            this.parse(promise,onFulfilled(value), resolve, reject);
          },
          onRejected: value => {
            this.parse(promise,onRejected(value), resolve, reject);
          }
        })
      }
      if (this.status == HD.FULFILLED) {
        setTimeout(() => {
          parse(promise,onFulfilled(this.value), resolve, reject)
        });
      }
      if (this.status == HD.REJECTED) {
        setTimeout(() => {
          parse(promise,onRejected(this.value), resolve, reject);
        });
      }
    })
    return promise;
  }
  parse(promise,result, resolve, reject) {
    if(promise === result){
      // 杜绝了return 自己的操作
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
}