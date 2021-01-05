// <div desx="houdunren">在线学习</div>
// <div desx="hdcms">开源产品</div>

let divs = document.querySelectorAll('div');
divs.forEach(function(item){
  item.addEventListener('click',function(){
    // 此时会造成内存无用的浪费
    // 因为保留了每一份item
    console.log(item.getAttribute('desc'));
  })
})

// 解决方案
let divs = document.querySelectorAll('div');
divs.forEach(function(item){
  let desc = item.getAttribute('desc');
  item.addEventListener('click',function(){
    console.log(desc);
  });
  // 以往的item保存了整个div的DOM属性
  // 但是实际上我们只需要item的desc属性
  // 所以我们将整个item置空,节约了大部分内存
  // 只保留下了哥哥item的desc属性
  item = null;
})