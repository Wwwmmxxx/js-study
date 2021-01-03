function hd(){
  console.log("houdunren");
}

// 定义方法后,JS会将其压入windows栈中
// 这是一个历史遗留问题
window.hd();

// 当使用var时,同样也会压入window中
// 但是当使用let时,就不会压入window中
var cms = function(){
  console.log("houdunren.com");
}

window.cms();

