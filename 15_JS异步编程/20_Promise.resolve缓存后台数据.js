// 默认成功状态 , 而不是pending的等待状态
// 可以用于缓存 , 减缓后台的压力
Promise.resolve('后盾人').then(value => {
  console.log(value)
})


//-----------------实例---------------------
function query(name) {
  // 缓存
  const cache = query.cache || (query.cache = new Map());

  if (cache.has(name)) {
    // 如果已经有了name数据 , 那么就直接返回成功
    // 正常来说请求会有失败和成功 , 但是用于缓存的数据是永远成功的 , 所以直接返回Promise.resolve
    return Promise.resolve(cache.get(name));
  }

  return ajax(`http://localhost:8080/php/user.php?name=${name}`).then(user => {
    return user;
  }).then(
    user => {
      // 压到缓存里面
      cache.set(name, user);
      console.log(cache);
      return user;
    }
  )
}

query('后盾人').then(user => {
  console.log(user);
})

setTimeout(() => {
  query('后盾人').then(user => {
    console.log(user);
  })
}, 1000);

//----------------------Promise.resolve的其他用法-------------------------
//-----------------
let hd = {
  then(resolve, reject) {
    resolve('后盾人');
  }
}

Promise.resolve(hd).then(value => {
  console.log(value);
})