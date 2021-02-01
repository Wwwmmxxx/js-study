class User{
  site = '后盾人'
  constructor(name){
    this.name = name;
  }
  changeSite(value){
    this.site = value;
  }
  show(){
    return `${this.site}:${this.name}`
  }
}

let hd = new User('Houdunren');
console.log(hd) // User{ site:'后盾人,name:'Houdunren }
hd.changeSite('徐逸飞');
console.log(hd.show());



