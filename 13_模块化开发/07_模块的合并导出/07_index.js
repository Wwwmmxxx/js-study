// 此时有可能会出现重名的属性 , 所以一般使用别名的方法
// import { a } from './07_1.js';
// import { b } from './07_2.js';

import * as a from './07_1.js';
import * as b from './07_2.js';


export { a,b }