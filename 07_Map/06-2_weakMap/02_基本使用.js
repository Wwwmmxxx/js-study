const hd = new WeakMap();
const arr = ['hdcms'];
hd.set(arr, "houdunren");

// 1. 判断是否存在
console.log(hd.has(arr));

// 2. 因为WeakMap是一个弱引用类型
// 当我们将arr置空时 , 实际上arr就会被垃圾回收器回收 , 导致了WeakMap元素内的元素数量不准确
// 所以WeakMap不提供长度属性
console.log(hd.size);

// 3. 同上理由. WeakMap也不提提供遍历.没有keys(),values(),entries()

console.log(hd.delete(arr));