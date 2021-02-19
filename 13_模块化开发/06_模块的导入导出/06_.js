export let site = '后盾人'

// 必须写show名称,次为具名的意思
export function show() {
  console.log(site);
}

// 默认导出 , 默认导出只能有一个 , 在接收时不需要使用{}
// 实际上原理: export { User as default }
export default class User {
  static render() {
    return 'user render method'
  }
}

// 具名导出
// export { site , show, User };

// 别名导出
// export {site as hd };

