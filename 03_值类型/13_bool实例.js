while (true) {
  const year = prompt("后盾人哪年成立的").trim();
  if (!year) continue;
  console.log(year == "2020" ? "正确" : "错误");
  break;
}
