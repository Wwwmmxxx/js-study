async function get(name){
  // await必须放到async函数中使用
  let host = `http://localhost:8888/php/`;
  let user = await ajax(`${host}/user.php?name=${name}`);
  console.log(user);
  let lesson = await ajax(`${host}/houdunren.php?id=${user.id}`);
  console.log(lesson);
}

get("后盾人")