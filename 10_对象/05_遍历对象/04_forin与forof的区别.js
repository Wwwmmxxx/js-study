const a = [6,5,4,3,2,1];

// 在数组中forin的key表示下标
for(const key in a){
  console.log(key);
}

// 在数组中forof的key表示元素
for(const key of a){
  console.log(key);
}