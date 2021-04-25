class User {
  get(name){
    let user = ajax(`http://localhost:8888/php/user.php?name=${name}`);
    // 不能这么用, 因为此时user.name是不存在的
    // 必须要等到数据加载完成后再执行
    user.name += '-houdunren.com';
    return user;
  }

  async get(name){
    let user = await ajax(`http://localhost:8888/php/user.php?name=${name}`);
    // 不能这么用, 因为此时user.name是不存在的
    // 必须要等到数据加载完成后再执行
    user.name += '-houdunren.com';
    return user;
  }
}

new User().get('后盾人');