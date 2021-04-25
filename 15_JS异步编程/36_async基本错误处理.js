// 初始
new Promise((resolve, reject) => {
  // 错误不止于throw , 也可能是定义或者其他错误 , 因为此时代码内部是被try---catch包含了的
  throw new Error('fail');
}).catch(error => {
  console.log(error);
})

async function hd() {
  throw new Error('fail');
}

hd().catch(error => console.log(error))


async function hd1(name) {
  // 如果在请求的网站中抛出了异常 , 那么也能够被catch住
  return ajax(`http://localhost:8888/php/user.php?user=${name}`)
}

hd('后盾人')
  .then(user => console.log(user))
  .catch(error => console.log(error))
