function timeout(delay = 1000) {
  return new Promise((resolve,reject) => {
    setTimeout(resolve, delay)
  })
}

timeout(2000).then(() => {
  console.log('houdunren')
  return timeout(2000);
}).then(value => {
  console.log(`hdcms.com`)
})