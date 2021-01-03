function Request() {
  this.get = function (param) {
    //id=1&cat=js
    let str = Object.keys(param).map(k => `${k}=${param[k]}`).join("&");
    console.log(`https://houdunren.com?${this.url}/${str}`);
  }
}

// 请求书
function Article() {
  this.url = 'articles/lists';
  Request.call(this);
}

// 请求用户
function User(){
  this.url = 'user/lists';
  Request.call(this);
}

let a = new Article();
a.get({ id: 1, cat: 'js' });

let u = new User();
u.get({id:2, role:'admin'});

