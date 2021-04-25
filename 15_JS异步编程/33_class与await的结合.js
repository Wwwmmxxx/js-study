class User {
  constructor(name){
    this.name = name;
  }
  // 在类中直接定义then方法 ,也可以作用于Promise中
  then(resolve, reject) {
    let user = ajax(`http://localhost:8888/php/user.php?name=${this.name}`);
    resolve(user);
  }
}

async function get() {
  await new User(`后盾人`);
  // 在User的then方法执行resolve()方法后,输出console.log
  console.log('houdunren.com')
}

get();