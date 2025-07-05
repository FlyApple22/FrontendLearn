// 一、变量和常量
// 变量和常量认为是储存东西的地方 （储存的是数据）

// const place = "xinjiang";
// let fruit = "apple";

// 命名规则
// 不能数字开头
// 可以 => 字母 数字 _ $
// 不能使用关键字命名

// 约定俗成
// 不能用拼音
// 驼峰命名

//打印
// console.log(place);
// console.log(fruit);

// 二、数据类型
// 1. Number   2. String   3.Boolean  4.undefined  5.null
// NaN （Not a Number）

// let a = 1;
// let b = "abc";
// let c = "哈喽";
// let d = "%&^*^*^^341928349dnhjwekbf🚀";
// let e = true;
// let f = false;
// 没存具体的值 -> 未定义值
// let g;

// 只是值为null
// let h = null;

// 三、typeof
// console.log(typeof 123);
// console.log(typeof "hello");
// console.log(typeof "123");
// console.log(typeof true);

// 四、算数运算符 + - * / % **
// console.log(1 + 1);
// console.log(2 - 1);
// console.log(2 * 4);
// console.log(8 / 2);
// console.log(5 % 2);
// console.log(2 ** 3);

// 五、赋值运算符
// = 直接赋值

// += 加后赋值

// aa = aa + bb;
// aa += bb;
// console.log("第一次运算" + aa);

// -= 减后赋值

// aa = aa - bb;
// aa -= bb;
// console.log("第二次运算" + aa);

// *= 乘后赋值

// /= 除后赋值

// %= 取模后赋值

// **= 幂运算后赋值

// 五、比较运算符

// == 相等(有类型转换)
let aa = 2;
let bb = 1;

// console.log(aa == bb);

// === 相等(严格相等)
// console.log(aa === bb);

// != 不等
// console.log(aa != bb);

// !== 不等（严格不等）
// console.log(aa !== bb);

//  > >=  < <=
// console.log(aa > bb);
// console.log(aa >= bb);

// 六、布尔运算符
// 0 "" null undefined NaN 都为假
// 1. && || 特性
// 2. 返回的是参与运算的的原始值
// 3. &&如果没有假值 他会返回最后一个真值
// 4. ||如果没有真值 会返回最后一个假值

// && 逻辑与 遇到假值 立马返回 后续不再运算 返回的是参与运算的的原始值
// let b1 = false;
// let b2 = true;

// || 逻辑或 遇到真值 立马返回 后续不再运算

// ! 逻辑非 取反

//六、类型转换

// 1.隐式类型转换
// 字符串拼接
// console.log("5" + 3);
// console.log("5" + "3");
// console.log(5 + 3);

// 数字运算
// console.log("5" - 3);
// console.log(5 - 3);

// 2.显式类型转换

// console.log(Number("5") + 3);
// console.log("5" + String(3));
