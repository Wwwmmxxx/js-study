function Web(url){
  this.url = url;
}

// 此为静态属性
Web.url = 'hdcms.com'

let web = new Web('houdunren.com');
console.log(web);
console.log(Web)

//-----------------------在类中---------------------
class Request{
  // 在类中定义host, 但是该属性依然是对象的属性
  // 不是类的属性
  host1 = 'https://www.houdunren.com'
  // 使用static关键字 , 为静态属性
  static host2 = 'https://www.hdcms.com'
}

// 可以看到结果与Function一致
let request = new Request();
console.log(request);
console.log(Request)







