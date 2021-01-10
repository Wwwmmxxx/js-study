const lessons = [
  {
    title: 'Flexxxxx',
    category: 'css'
  }, {
    title: 'Grid',
    category: 'css'
  }, {
    title: 'POSITION',
    category: 'css'
  }
]

let proxy = new Proxy(lessons, {
  get(array, key) {
    console.log(key);//key为下标
    const title = array[key].title;
    console.log(title);
    const len = 5;
    array[key].title = title.length > len ? title.substr(0, len) + '.'.repeat(3) : title;
    return array[key];
  }
});
console.log(proxy[0]);//此时key为0