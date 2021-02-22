let hd = 'houdunren';

// 当不使用g模式时,我们选取第一个字母,能够下标index位置
console.log(hd.match(/\w/));
// 当使用g模式时,虽然能够选取所有的元素,但就没有了index属性
console.log(hd.match(/\w/g));

// 这个时候我们可以使用exec方法
// 使用这个方法会自动读取下一个元素 , 原理是 => 正则表达式内包含一个lastIndex属性
// 使用exec方法时,会自动向下读取
// 注意: 必须使用g全局模式
let reg = /\w/g;
console.log(reg.exec(hd));
console.log(reg.exec(hd));
console.log(reg.exec(hd));
console.log(reg.exec(hd));

// 使用这个特性,我们可以使用while循环,获取每一个信息
while(res = reg.exec(hd)){
  console.log(res);
}
