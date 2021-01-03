const div = document.querySelectorAll("div");

// 错误的,此时div表示一个NodeList数组 , 是没有map方法的
div.map(item => console.log(item));

// 转换为数组后操作
Array.from(div).map(item => console.log(item));

// 原型链
Array.prototype.map.call(div,function(item){
  console.log(item);
});

// 点语法
[...div].map(item => console.log(item));

