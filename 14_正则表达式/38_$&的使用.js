<main>
  在线教育是一种高效的学习方式
</main>

const main = document.querySelector("body main");
main.innerHTML = main.innerHTML.replace(/教育/g,`<a href="https://www.hdcms.com>$&</a>`)