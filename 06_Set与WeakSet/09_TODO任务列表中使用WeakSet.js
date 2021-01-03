class Todo {
  constructor() {
    this.items = document.querySelectorAll("ul>li");
    this.lists = new WeakSet();
    this.items.forEach(item => this.lists.add(item));
  }
  run() {
    this.addEvent();
  }
  addEvent() {
    this.items.forEach(item => {
      let a = item.querySelector('a');
      a.addEventListener('click', event => {
        const parentElement = event.target.parentElement;
        if (this.lists.has(parentElement)) {
          parentElement.classList.add("remove");
          this.lists.delete(parentElement);
        } else {
          parentElement.classList.remove("remove");
          this.lists.add(parentElement);
        }
      });
    });
  }
}