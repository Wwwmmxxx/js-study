// 第一种方式 , 声明函数
async function get(name) {
  let user = await ajax(`http://localhost:8080/php/user.php?user=${name}`);
}

get(`后盾人`).then(user => {
  console.log(user);
})

// 第二种方式 , 声明对象
let hd = {
  async get(name) {
    return await ajax(`http://localhost:8080/php/user.php?user=${name}`);
  }
}
hd.get('Houdunren').then(user => console.log(user));

// 第三种方式 , 封装成类
class User {
  async get(name) {
    return await ajax(`http://localhost:8080/php/user.php?user=${name}`);
  }
}

new User().get('houdunren').then(user => console.log(user));