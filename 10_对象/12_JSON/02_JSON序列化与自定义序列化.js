let data = {
  name :'徐逸飞',
  data:{
    title:'123'
  },
  // 自定义学历恶化
  toJSON(){
    return{
      title:this.name
    }
  }
}

// 第二个参数为需要保留的参数
// 第三个参数为控制缩进
console.log(JSON.stringify(data,['name'],2));
console.log(JSON.stringify(data,['title'],2));


