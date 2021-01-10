let data = {
  name: '徐逸飞',
  data: {
    title: '123'
  }
}

let json = JSON.stringify(data);
console.log(json);

// 第二个参数,对转换的进行处理
console.log(JSON.parse(json, (key, value) => {
  if (key === 'name') {
    value = '[浦三路]-' + value;
  }
  return value;
}));
