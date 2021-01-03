// 必须使用引用类型
// 此时是报错的,因为WeakMap认为是元素都是字符串型的
// let set = new WeakMap(['hdcms','houdunren.con']);
let set = new WeakMap();
// 此时是正确的,向WeakMap中第一个元素的位置添加了一个数组(引用类型)
set.add(['hdcms','houdunren.con']);

// 可以对Dom元素使用WeakMap();
let divs = new WeakMap();
document.querySelectorAll("div").forEach(function(item){
  divs.add(item);
})

// 使用delete移除
divs.delete(divs[0]);

// 使用has判断
divs.has(divs[0]);