// 函数创建好以后 , 内部是单独的作用域
let title = '后盾人';
function show() {
  // 这一块函数在不被使用时 , 是会被清理掉的
  let url = 'houdunren.com';
  function hd() {
    let site = 'hdcms';
    console.log(url,site);
  }
  hd();
}

show();
show();// 此show()中的url并不是上一次的url