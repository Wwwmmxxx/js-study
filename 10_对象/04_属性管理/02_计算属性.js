// 计算属性
let id = 0;
const user = {
  [`id-${id++}`]: id,
  [`id-${id++}`]: id,
  [`id-${id++}`]: id
}
console.log(user); // 输出{ 'id-0': 1, 'id-1': 2, 'id-2': 3 }

// 使用计算属性动态设置属性
const lessons = [
  {
    title: "媒体查询响应式布局",
    category: "css"
  },
  {
    title: "FLEX 弹性盒模型",
    category: "css"
  },
  {
    title: "MYSQL多表查询随意操作",
    category: "mysql"
  }
];

lessonsObject = lessons.reduce((obj, cur, index) => {
  obj[`${cur['category']}-${index}`] = cur;
  return obj;
}, {})

console.log(lessonsObject);