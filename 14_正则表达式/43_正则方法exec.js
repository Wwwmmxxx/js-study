<main>
  后盾人不断分享视频,后盾人的网址是
</main>

let reg = /后盾人/g
const main = document.querySelector('main');
// 这个地方的特点就是lastIndex
console.log(reg.exec(main.innerHTML));
let count = 0;
while (res = reg.exec(main.innerHTML)) {
  count++;
}
console.log(count);
