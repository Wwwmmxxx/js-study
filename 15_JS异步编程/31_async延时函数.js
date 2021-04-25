async function sleep(delay = 2000) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, delay);
  })
}

async function show(){
  for (const iterator of ['houdunren','xuyifei']) {
    await sleep();
    console.log(iterator)
  }
}

show();
