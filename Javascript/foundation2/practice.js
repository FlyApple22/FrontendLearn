// 1.定义一个函数，输入一个名字，返回欢迎语
function sayHello(name) {
  console.log('hello' + ' ' + name);
}
sayHello('小明');
// 2.用数组存储 3 个颜色，打印第一个颜色
let color = ['red', 'yellow', 'blue'];

// 3.往一个数组中添加一个元素
color.push('pink');
console.log(color);
console.log(color[color.length - 1]);
console.log(color[3]);
// 4.定义一个对象表示学生，包含名字、年龄，并打印名字
let student = {
  name: 'a',
  age: 18,
  printName: function () {
    console.log(this.name);
  },
  skill: ['red', 'yellow', 'blue'],
};
console.log(student.age);
student.printName();
console.log(student.skill[1]);
// 5.对象中嵌套数组，打印出第二个爱好

// 6.判断一个数是正数、负数还是零（if-else）
let numbers = -1;
if (numbers > 0) {
  console.log('正数');
} else if ((numbers = 0)) {
  console.log('零');
} else {
  console.log('负数');
}
// 7.使用 switch 判断红绿黄灯
let light = 2;
switch (light) {
  case 1:
    console.log('red');
    break;
  case 2:
    console.log('green');
    break;
  case 3:
    console.log('yellow');
    break;
  default:
    console.log('error');
    break;
}
// 8.用 for 循环打印 1~5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// 9.使用 while 计算从 1 加到 3 的和
let i = 1;
let sum = 0;
while (i <= 3) {
  sum += i;
  i++;
}
// 10.使用 for 循环跳过数字 3（continue）
for (let i = 1; i <= 5; i++) {
  console.log(i);
  if (i === 3) {
    continue;
  }
}
// 11.打印九九乘法表
for (let i = 0; i < 9; i++) {
  let line = '';
  for (let j = 0; j < i + 1; j++) {
    line = line + (j + 1) + 'x' + (i + 1) + '=' + (j + 1) * (i + 1);
  }
  console.log(line);
}
// 一、你正在设计一个简单的报名系统，只有年龄在 18 到 60 岁之间，并且已经 填写了电话号码的用户才允许报名成功
// 请写一段代码来判断一个用户是否可以报名，并打印相应提示
let user = {
  name: '小王',
  age: 16,
  phone: '12345678901',
};

if (user.age > 18 && user.age < 60 && user.phone !== '') {
  console.log('可以报名');
} else {
  console.log('不可报名');
}
//  二、一个班有 5 名学生的成绩，存储在一个数组中。请你用循环统计每位同学的成绩，并输出等级：
//- 90 以上是 A
//- 80~89 是 B
//- 60~79 是 C
//- 60 以下是 D
let scores = [92, 85, 73, 59, 66];
for (let i = 0; i < scores.length; i++) {
  if (scores[i] >= 90) {
    console.log('A');
  } else if (scores[i] >= 80) {
    console.log('B');
  } else if (scores[i] >= 60) {
    console.log('C');
  } else {
    console.log('D');
  }
}
// 三、现在有一个购物车，里面是若干商品对象，每个商品都有 `name`、`price` 和 `isMemberOnly`（是否会员专属）。
// 请打印出所有可以给非会员顾客购买的、价格低于 100 的商品名称。
let cart = [
  { name: '牙刷', price: 20, isMemberOnly: false },
  { name: '剃须刀', price: 120, isMemberOnly: false },
  { name: '面膜', price: 88, isMemberOnly: true },
  { name: '洗发水', price: 99, isMemberOnly: false },
];

for (let i = 0; i < cart.length; i++) {
  if (cart[i].price < 100 && !cart[i].isMemberOnly) {
    console.log(cart[i].name);
  }
}
// 四、课程成绩表
// 一个二维数组保存了 3 个学生的成绩（语文、数学、英语）。请你使用 for 循环输出每位学生的总分。
let grades = [
  [90, 85, 88], // 小明
  [78, 92, 81], // 小红
  [85, 80, 79], // 小刚
];

let names = ['小明', '小红', '小刚'];

// 五、会员筛选
// 有一个对象保存了多个用户的会员状态，请用  for...in 遍历用户，打印所有是会员的用户名。
let users = {
  Tom: true,
  Jerry: false,
  Alice: true,
  Bob: false,
};

// 六、签到过滤器
// 一个数组中是学生的签到状态，`true` 表示已签到，`false` 表示未签到。用 for遍历
// 跳过没签到的学生，只输出签到成功的。
let statusList = [true, false, true, true, false];
let studentName = ['小明', '小红', '小刚', '小华', '小丽'];
for (let i = 0; i < statusList.length; i++) {
  if (statusList[i] === false) {
    continue;
  }
  console.log(studentName[i]);
}
// 七、商品搜索
// 用户输入一个商品名，程序遍历商品数组，找到商品就显示信息并停止搜索
let products = [
  { name: '牙膏', price: 15 },
  { name: '洗发水', price: 30 },
  { name: '肥皂', price: 5 },
];

let searchName = '洗发水';

for (let i = 0; i < products.length; i++) {
  if (products[i].name === searchName) {
    console.log(products[i]);
    break;
  }
}
// 八、打卡系统
// 你设计一个打卡系统，记录员工每天是否打卡成功。
// 每个员工是一个对象属性，值为一个包含 7 天打卡状态的数组（布尔值）。请判断并打印出那些打卡次数少于 5 次的人。
let attendance = {
  Alice: [true, false, true, true, true, false, false],
  Bob: [true, true, true, true, true, true, true],
  Tom: [false, false, false, true, false, false, false],
};
