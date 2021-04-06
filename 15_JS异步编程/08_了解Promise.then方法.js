new Promise((resolve, reject) => {
  reject('涨价了买不起了')
  resolve('一瓶可乐')
})
  .then(
    // 无论这个地方有没有处理, 都会向下衍生
  )
  .then(
    // 成功和失败不是必须的
    // 但是当不需要成功,只需要失败时,根据参数的赋值顺序问题,必须给第一个成功参数赋值null
    value => {
      console.log(value)
    },
    reason => {
      console.log(reason)
    }
  )