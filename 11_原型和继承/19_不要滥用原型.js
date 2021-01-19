// <button onclick="this.hide()">后盾人</button>

// 不能向系统的对象中追加方法 , 会导致和其他的库产生错误
Object.prototype.hide = function(){
  this.style.display = "none";
}

