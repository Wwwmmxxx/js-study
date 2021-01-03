// 在lists前加site
let lesson = {
  site: '后盾人',
  lists: ['js', 'css', 'mysql'],
  show() {
    // 方法一 : 使用const关键字
    const self = this;
    // 在map内不能直接使用this.site , 因为此时this处于function内指向window
    // 但是在方法内的this指向的是所处的对象 , 所以首先将this赋给self
    return this.lists.map(function (value) { return self.site + value });

    // 方法二 : 使用map的第二参数,此时会将this传入map的function内,this即指向该对象
    // 但是这个方法只有部分函数可以使用
    return this.lists.map(function(value){return this.site + value},this);
  }
}

console.log(lesson.show());