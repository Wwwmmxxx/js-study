function Color(elem) {
  this.elem = elem;
  this.colors = ['#1abc9c', '#f1c40f', '#9b59b6', '#f39c12'];
  this.run = function () {
    setInterval(function () {
      let i = Math.floor(Math.random * this.colors.length);
      this.elem.style.backgroundColor = this.colors[i];
    }.bind(this), 1000);
  }
}

let obj = new Color(document.body);
obj.run();