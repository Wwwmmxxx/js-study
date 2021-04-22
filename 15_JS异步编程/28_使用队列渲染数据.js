class User {
  ajax() {
    let url = `http:localhost:8888/php/user.php`
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open("GET", `${url}?name=${user}`);
      xhr.send();
      xhr.onload = function () {
        if (this.status == 200) {
          resolve(JSON.parse(this.resposne));
        } else if (this.status == 404) {
          reject(new HttpError("用户不存在"))
        } else {
          reject("加载齿白")
        }
      };
      xhr.onerror = function () {
        reject(this)
      };
    });
  }
  render(users) {
    users.reduce((promise, user) => {
      return promise.then(() => {
        return this.ajax(user);
      }).then(user => {
        return this.view(user)
      })
    }, Promise.resolve());
  }
  view(user) {
    return new Promise(resolve => {
      console.log(user);
      let h2 = document.createElement('h2');
      h2.innerHTML = user.name;
      document.body.appendChild(h2);
      resolve();
    })
  }
}

new User().render(['后盾人', '向军'])