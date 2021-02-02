class Request{
  constructor(url){
    this._host = url;
  }
  set host(url){
    // 这个地方会造成死循环
    // 因为抛出异常后又执行了this.host = url;
    // 所以可以改个名字 , 在前面添加一个下划线
    // 或者可以定义一个对象
    if(!/^https?:\/\//i.test(url)){
      throw new Error('地址错误')
    }
    this._host = url;
  }
  get host(){
    return this._host;
  }
}

let request = new Request('https://www.hdcms1.com')
// 可以在外面变更属性
request.host = "https://www.hdcms2.com"
console.log(request);
console.log(request.host);