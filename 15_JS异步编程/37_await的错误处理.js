// 有一个await的情况
// async function hd(name) {
//   // 对于await的异常可以使用trycatch
//   try{
//     let user = await ajax(`https://localhost:8888/php/user.php?name=${name}`);
//     return user;
//   }catch(error){

//   }
//   console.log(333);
// }

// hd('后盾人')
//   .then(user => console.log(user))
//   .catch(error => console.log(error.message))

//-----------------------------------------------------------------------
// 有多个await的情况
async function hd(name) {
  // 对于await的异常可以使用trycatch
  try {
    let user = await ajax(`https://localhost:8888/php/user.php?name=${name}`);
    let lessons = await ajax(`https://localhost:8888/php/houdunren.php?id=${user.id}`);
    return lessons;
  } catch (error) {
    alert(error.message)
  }
}

hd('后盾人')
  .then(lessons => console.log(lessons))
  // 如果里面没有捕获到错误 , 那么就有外部的catch进行捕捉错误处理
  .catch(error => console.log(error.message))