let hd = 'hdddd';

// 在+号后使用? , 倾向于1个
console.log(hd.match(/hd+?/));

// 在*号后使用? , 倾向于0个
console.log(hd.match(/hd*?/));

// 在{}后使用? , 则倾向于2个
console.log(hd.match(/hd{2,}?/));

// 在?后使用? , 则倾向于0个
console.log(hd.match(/hd??/));