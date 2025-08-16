// 1. 图书馆借书统计

// 学校图书馆记录了当天借书的数据：

const records = [
  { user: "小明", book: "三国演义", returned: true },
  { user: "小红", book: "水浒传", returned: false },
  { user: "小明", book: "西游记", returned: false },
  { user: "小刚", book: "红楼梦", returned: true },
];

// 要求：

// 1. 统计已归还的书籍数量。
// 2. 找出哪些人有未归还书籍（不能重复）。
// 3. 用三元运算符给每条记录新增 `status` 字段（“已还”或“未还”）。

let count = 0;
for (let i = 0; i < records.length; i++) {
  if (records[i].returned === true) {
    count = count + 1;
  } else {
    console.log(records[i].user);
  }
  records[i].returned
    ? (records[i].status = "已还")
    : (records[i].status = "未还");
}
console.log(count);
console.log(records);

//  2. 运动会成绩排名

// 运动会 `100 米` 成绩（秒）：

const scores = [
  { name: "张三", time: 12.5 },
  { name: "李四", time: 11.8 },
  { name: "王五", time: 12.1 },
];

// 要求：

// 1. 按成绩从快到慢排序（注意越小越快）。
// 2. 输出第一名的姓名和成绩。
let a = [];
for (let i = 0; i < scores.length; i++) {
  a.push(scores[i].time);
}
console.log(a.sort());

//  3. 超市收银优惠

// 超市满 100 元减 20 元：

const cart = [
  { name: "牛奶", price: 30, qty: 2 },
  { name: "饼干", price: 15, qty: 3 },
  { name: "洗发水", price: 40, qty: 1 },
];

// 要求：

// 1. 计算总价。
// 2. 判断是否满足满减条件，输出应付金额。

let count = 0;
for (let i = 0; i < cart.length; i++) {
  count = count + cart[i].price * cart[i].qty;
}
if (count >= 100) {
  console.log(count - 20);
} else {
  console.log(count);
}

//  4. 学生成绩等级

// 学生数学成绩：

const students = [
  { name: "小明", score: 88 },
  { name: "小红", score: 65 },
  { name: "小刚", score: 72 },
];

// 规则：

// * ≥85：优秀
// * 70\~84：良好
// * <70：及格
//   要求：用 `for...of` 循环为每个学生添加 `level` 字段并输出。

//  5. 用户名格式化

// 一组用户名：

let names = ["  Tom  ", "jack", "LUCY  ", "  Lily"];

// 要求：

// 1. 去掉多余空格。
// 2. 全部转成首字母大写、其他小写。
// 3. 输出新数组。

//  6. 班级总分统计（嵌套循环）

// 每个班级的多科成绩：

const classes = [
  { name: "一班", students: [{ score: 80 }, { score: 90 }] },
  { name: "二班", students: [{ score: 70 }, { score: 85 }, { score: 60 }] },
];

// 要求：

// 1. 用嵌套循环统计每个班的总分。
// 2. 输出 `{班级名: 总分}` 格式的数组。

//  7. 网站访问日志过滤

const logs = ["/home", "", "/about", null, "/contact", "/home", undefined];

// 要求：

// 1. 去掉空值（空串、null、undefined）。
// 2. 去重。
// 3. 输出最终数组。

//  8. 商品库存预警

const products = [
  { name: "苹果", stock: 50, min: 30 },
  { name: "香蕉", stock: 10, min: 20 },
  { name: "梨", stock: 0, min: 15 },
];

// 要求：

// 1. 用三元运算符给每个商品标记状态（库存充足/库存不足/缺货）。
// 2. 输出状态列表。

for (let i = 0; i < products.length; i++) {
  products[i].status =
    products[i].stock === 0
      ? "缺货"
      : products[i].stock < products[i].min
      ? "库存不足"
      : "库存充足";
}
console.log(products)

//  9. 密码安全检查

const password = "Abc1234";

// 要求：

// 1. 长度 ≥ 8 位。
// 2. 包含大写字母、小写字母和数字。
// 3. 输出是否安全。

//  10. 二维数组求和

const matrix = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9],
];

// 要求：

// 1. 用嵌套循环计算总和。
// 2. 输出结果。

//  11. 反转字符串

let str = "JavaScript";

// 要求：

// 1. 把字符串反转。
// 2. 输出反转后的字符串。

//  12. 查找手机号

const phones = ["13812345678", "13999998888", "12345", "13800001111"];

// 要求：

// 1. 过滤出合法的 11 位手机号（只要全是数字且以 1 开头）。
// 2. 输出结果。

//  13. 统计字符出现次数

let text = "hello world";

// 要求：

// 1. 统计每个字符出现的次数。
// 2. 输出对象 `{字符: 次数}`。

//  14. 价格格式化

let price = 5;

// 要求：

// 1. 把价格显示成 `￥5.00` 这种格式（保留两位小数）。

//  15. 找出数组最大值

let arr = [3, 9, 2, 7];

// 要求：

// 1. 不用 `Math.max`，用循环找出最大值。

//  16. 作用域测试

var x = 1;
function test() {
  console.log(x);
  var x = 2;
  console.log(x);
}
test();

// 问题：输出什么？为什么？

//  17. 函数参数作用域

let a = 1;
function change(a) {
  a = 2;
}
change(a);
console.log(a);

// 问题：输出什么？为什么？

//  18. 数组去重

let nums = [1, 2, 2, 3, 1, 4];

// 要求：

// 1. 去重。
// 2. 输出新数组。

//  19. 字符串首字母大写

let word = "hello";

// 要求：

// 1. 变成 `Hello`。

//  20. while 循环求阶乘

// 要求：用 `while` 循环计算 `5!`（1×2×3×4×5）。

//  21. 嵌套 for 打印乘法表（1\~3）

// 要求：

// 1×1=1
// 1×2=2  2×2=4
// 1×3=3  2×3=6  3×3=9

//  22. 求数组平均值

let scores = [80, 90, 70];

// 要求：

// 1. 用循环计算平均分。

//  23. 三元运算符判断奇偶

let n = 5;

// 要求：

// 1. 输出 `n` 是奇数还是偶数。

//  24. 统计数组中 true 的数量

let flags = [true, false, true, true, false];

// 要求：

// 1. 用循环统计 true 的个数。

//  25. 使用 map 翻倍数组元素

let nums = [1, 2, 3];

// 要求：

// 1. 返回一个新数组，里面的数是原来的 2 倍。

//  26. 使用 filter 过滤偶数

let nums = [1, 2, 3, 4, 5, 6];

// 要求：

// 1. 返回偶数数组。

//  27. 使用 reduce 求和

let nums = [1, 2, 3, 4];

// 要求：

// 1. 用 reduce 求和。

//  28. 模板字符串拼接

let name = "小明";
let age = 18;

// 要求：

// 1. 用模板字符串输出 `"我是小明，今年18岁"`。

//  29. split 和 join

let str = "a,b,c";

// 要求：

// 1. 转成数组 `['a','b','c']`。
// 2. 再拼接成 `'a|b|c'`。

//  30. 执行顺序

console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");

// 问题：输出顺序是什么？为什么？
