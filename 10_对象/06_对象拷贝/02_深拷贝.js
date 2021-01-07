// 深拷贝: 相对于浅拷贝 , 会完全复制对象
let obj = {
  name: '后盾人',
  user: {
    name: 'hdcms'
  },
  data: []
}

function copy(object) {
  // 针对数组
  let obj = object instanceof Array ? [] : {};
  for (const [k, v] of Object.entries(object)) {
    obj[k] = typeof v == "object" ? copy(v) : v
  }
  return obj;
}

let hd = copy(obj);
hd.data.push('徐逸飞');
console.log(JSON.stringify(obj, null, 2));
console.log(JSON.stringify(hd, null, 2));