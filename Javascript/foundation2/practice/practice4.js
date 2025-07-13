// 1.计算平均成绩
// 你收到一个学生成绩数组，请计算他们的平均分并输出
let scores = [80, 90, 75, 85];
let sum = 0;

// 2.查找未归还图书
// 图书馆系统中包含多本图书的信息，请找出所有尚未归还的图书。并打印
let books = [
  { title: 'JS入门', returned: true },
  { title: 'HTML', returned: false },
  { title: 'CSS', returned: true },
];

// 3.用户名合法性校验
// 你正在注册系统中编写验证逻辑，用户名需在 4~10 个字符之间，请完成判断逻辑。
// 可将字符串看作数组 数组的某些方法同样可以使用
let name = 'Tom12344444444';
if (name.length < 10 && name.length > 4) {
  console.log('合法');
} else {
  console.log('不合法');
}
