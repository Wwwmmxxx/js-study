class Common {
  sum() {
    return this.data.reduce((t, c) => t + c.price, 0)
  }
  getByKey(key) {
    return this.data.filter((item) => item.name.includes(key));
  }
}

class Controller extends Common {

}

class Lesson extends Controller {
  constructor(data) {
    super();
    this.data = data;
  }
  info() {
    return {
      totalPrice: super.sum(),
      data: this.data
    }
  }
  getByKey(key) {
    return super.getByKey(key).map(item => item.name);
  }
}

let data = [
  { name: 'js', price: 100 },
  { name: 'css', price: 90 },
  { name: 'php', price: 80 },
]

let hd = new Lesson(data);

console.log(hd.info())
console.log(hd.getByKey('js'));

