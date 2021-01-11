let hd = {
  // 在自身定义相同的render方法
  render(){
    console.log('hd .render')
  }
};

// 向长辈添加tender方法
hd.__proto__.render = function(){
  console.log('father .render');
}

// 此时执行自己的render()方法
hd.render();
