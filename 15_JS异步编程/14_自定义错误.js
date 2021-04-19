class ParamError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'ParamError';
  }
}

class HttpError extends Error{
  constructor(msg){
    super(msg);
    this.name = 'HttpError'
  }
}

ajax(`ttp://localhost:8888/php/user.php?name=后盾人`)
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    if(error instanceof ParamError){
      console.log(error.message)
    }
    if(error instanceof HttpError){
      alert(error.message)
    }
  })

function ajax(url) {
  return new Promise((resolve, reject) => {
    if (!/^http/.test(url)) {
      throw new ParamError('请求地址格式错误')
    }
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onload = function () {
      if (this.status == 200) {
        resolve(JSON.parse(this.response))
      } else if(this.status == 404){
        // 注意 , 这里不能直接抛出异常 , 因为是异步的 , 所以没有能够接受错误的主线程
        // throw new HttpError('用户不存在')
        reject(new HttpError('用户不存在'));
      } else {
        reject('加载失败')
      }
    };
    xhr.onerror = function () {
      reject(this);
    }
  })
}