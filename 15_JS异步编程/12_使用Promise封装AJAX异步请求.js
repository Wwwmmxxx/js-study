let url = `http://localhost:8888/php`;
ajax(`${url}/user.php?name=后盾人`).then(value => {
  console.log(value);
}, reason => {
  console.log(reason)
})


// 一般我们都会放倒函数中,因为不可能进入页面后直接执行
function request() {
  return new Promise((resolve, reject) => {

  })
}

function ajax(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onload = function () {
      if (this.status == 200) {
        resolve(JSON.parse(this.response))
      } else {
        reject('加载失败')
      }
    };
    xhr.onerror = function () {
      reject(this);
    }
  })
}