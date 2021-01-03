// 在lists前加site
let lesson = {
  site: '后盾人',
  lists: ['js', 'css', 'mysql'],
  show() {
    // 此时this指向当前对象
    return this.lists.map((title) => `${this.site}-${title}`)
  }
}

console.log(lesson.show());

// 存在DOM元素
// <button>houdunren.com</button>
let Dom = {
  site: "后盾人",
  bind() {
    const button = document.querySelector('button');

    // 1.使用function()
    button.addEventListener('click', function () {

    });
    // 可以将以上理解为 button.onclick = function(){}
    // 所以此时的this是指当前的button

    // 2.使用箭头函数
    button.addEventListener('click', () => {
      // 在箭头函数中此时的this指向上下文中的对象
      // 所以此时this为Dom无法获取到button
    });

    // 综合以上 , 如果有需要点击时 , 将按钮的文字变更
    // 是使用箭头函数 , 还是普通函数?

    // 1.第一种办法 , 使用参数event
    button.addEventListener('click', (event) => {
      // 此时的event.target指向当前的Dom对象
      console.log(this.site + event.target);
    })

    // 2.第二种方法 , 定义一个self
    const self = this;
    button.addEventListener('click',function(){
      console.log(self.site + this.innerHTML);
    })
  },
  // 3. 第三种方法 , 定义两个方法
  handleEvent:function(event){
    console.log(this.site + event.target.innerHTML);
  },
  bind2:function(){
    const button = document.querySelector('button');
    // 此时点击按钮时 , 系统会自动调用handleEvent
    button.addEventListener('click',this);
  }
}

Dom.bind();