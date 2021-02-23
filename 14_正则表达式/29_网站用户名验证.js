document.querySelector("[name='username']").addEventListener('keyup', e => {
  const value = e.target.value;
  // 用户名必须以字母开头
  let reg = /^[a-z][\w-]{2,7}$/i
  console.log(reg.test(value));
})