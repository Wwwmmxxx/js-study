let set = new Set(["hdcms", "houdunren"]);
// 以下三者相同
console.log(set.values());
console.log(set.keys());
console.log(set.entries());

// 1.使用forEach遍历
set.forEach(function (value, key, arr) {
  
});

// 2.使用forof => forof实际上是对values()的元素进行遍历
for(const value of set){
  console.log(value)
}

// 3.网站关键字搜索案例,界面上有一个<input type="text" name="hd" />
let obj = {
  data:new Set(),
  set keyword(word){
    this.data.add(word);
  },
  show(){
    let ul = document.querySelector('ul');
    ul.innerHTML = "";
    this.data.forEach(function(value){
      ul.innerHTML += `<li>${value}</li>`
    })
  }
}

let input = document.querySelector("[name='hd']");
input.addEventListener('blur',function(){
  obj.keyword = this.value;
  obj.show();
})