// 密码由字母数字构成,必须包含一个大写字母
document.querySelector('[name="password"]').addEventListener('keyup', e => {
  const value = e.target.value;
  const regs = [
    /^[a-z0-9]{5,10}$/i,
    /[A-Z]/
  ]
  let state = regs.every(e => e.test(value));
  console.log(state ? "正确" : "不正确");
})