// 1. 使用点语法获取
let user = {
  name: '徐 逸飞'
}

console.log(user.name);

// 2. 使用[]获取
console.log(user['name'])

// 3. []主要用于通过变量取值的场景
let property = "name";
console.log(user[property]);

// 4. 如果属性名不是合法变量名,就必须使用[]符号
// user.my - age = 28; // 此时是错误的 , 因为变量不允许使用my-age
user['my-age'] = 28;


// 5. 删除属性
delete user.name;
console.log(user.name); // 输出undefined
