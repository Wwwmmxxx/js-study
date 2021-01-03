// 为变量设置默认值
let [name1, site1 = 'hdcms'] = ['后盾人'];
console.log(site1); //hdcms

let { name2, url2, user2 = '向军大叔' } = { name2: '后盾人', url2: 'houdunren.com' };
console.log(name2, user2);//向军大叔

// 使用 默认值的特性完成 参数预设
function createElement(options) {
  let {
    width = '200px',
    height = '300px',
    backgroundColor = 'red'
  } = options;

  const h2 = document.createElement('h2');
  h2.style.width = width;
  h2.style.height = height;
  h2.style.backgroundColor = backgroundColor;
  document.body.appendChild(h2);
}

createElement({ backgroundColor: 'red' })

