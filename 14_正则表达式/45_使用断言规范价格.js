let lesson = `
  js,200元,300次
  php,300.00元,100次
  node.js,180元,260次
`

// 这里不是原子组,二十条i按
let reg = /(\d+)(.00)?(?=元)/gi

lesson.replace(reg,(v,...args)=>{
    console.log(args);
    args[1] = args[1] || '.00';
    return args.splice(0,2).join('');
});

console.log(lesson)