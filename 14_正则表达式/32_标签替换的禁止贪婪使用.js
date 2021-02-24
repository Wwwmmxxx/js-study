<main>
  <span>houdunren</span>
  <span>hdcms.com</span>
  <span>houdunren.com</span>
</main>

// 目标 : 描红 h4 后盾人-
const main = document.querySelector('main');
// 此时会把main下面所有的标签取出来,因为+号是贪婪的,这里面所有的内容其实都满足\s\S
// 所以需要使用禁止贪婪
// 和原子组使用时,需要把?放到原子组内
// 在这个案例中,如果不把?放到原子组内,那么结果还是会取出所有的内容
const reg = /<span>([\s\S]+?)<\/span>/ig
main.innerHTML = main.innerHTML.replace(reg,(v,p1)=>{
  return `<h4 style="color:red">后盾人-${p1}</h4>`
})