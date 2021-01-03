let hd = { name: '后盾人' };
let edu = hd;

let set = new WeakSet();
// 将hd放到WeakSet中,是不会对指向{name:'后盾人'}的数量+1,所以此时指向name的还是只有2个
// 此时称为弱引用
set.add(hd);
// 此时系统会把hd给删掉,但是set不清楚,还是会存在在里面
hd = null;
edu = null;

// 一定时间以后会自动移除WeakSet中不存在的弱引用
setTimeout(() => {
  console.log(set);
}, 2000);

console.log(set);

// 由于存在无法判断WeakSet是否存在值,所以无法对WeakSet使用循环

