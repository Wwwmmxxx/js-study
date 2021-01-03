let hd = { name: '后盾人' };
let edu = hd;
hd = null;
// 此时{name:'后盾人'}会被系统从内存中移除,数组也是相同的道理
edu = null;