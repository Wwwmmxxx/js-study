let data = {
  name:'徐逸飞'
}

for(const [key,value] of Object.entries(data)){
  observer(data,key,value);
}

function observer(data,key,value){
  Object.defineProperty(data,key,{
    get(){
      return value;
    },
    set(newValue){
      value = newValue
    }
  })
}

console.log(data.name);
data.name = '徐逸飞2';
console.log(data.name); 