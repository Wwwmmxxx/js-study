let hd = '2010';
// 这里的0-9,表示从0到9,只能升序,不能降序
console.log(hd.match(/[0-9]+/g));

let hd2 = 'houdunren';
console.log(hd2.match(/[a-z]+/g));

// 案例
<input type="text" name="username"></input>
let input = document.querySelector('[name="username"]');
input.addEventListener('keyup',function(){
  this.value.match(/^[a-z]\w+$/);
})

