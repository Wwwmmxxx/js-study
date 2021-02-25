<input type="text" name="email"></input>

const mail = document.querySelector("input[name='email']");
mail.addEventListener('keyup',e=>{
  let value = e.target.value;
  let flag = /^[\w-]+@(\w+\.)+(com|cn|cc)$/i.test(value);
  console.log(flag);
})