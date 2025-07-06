// 1.定义一个函数，输入一个名字，返回欢迎语
function sayHello(name) {
  console.log('hello' + ' ' + name);
}
sayHello('小明');
// 2.用数组存储 3 个颜色，打印第一个颜色
let color = ['red', 'yellow', 'blue'];

// 3.往一个数组中添加一个元素
color.push("pink");
console.log(color)
console.log(color[color.length-1])
console.log(color[3])
// 4.定义一个对象表示学生，包含名字、年龄，并打印名字
let student = {
  name:"a",
  age:18,
  printName:function () {
    console.log(this.name);
  },
  skill: ['red', 'yellow', 'blue']
}
console.log(student.age)
student.printName()
console.log(student.skill[1])
// 5.对象中嵌套数组，打印出第二个爱好

// 6.判断一个数是正数、负数还是零（if-else）
let numbers = -1;
if (numbers > 0) {
  console.log("正数")
}else if (numbers = 0) {
  console.log("零")
}else {
  console.log("负数")
}
// 7.使用 switch 判断红绿黄灯

// 8.用 for 循环打印 1~5

// 9.使用 while 计算从 1 加到 5 的和

// 10.使用 for 循环跳过数字 3（continue）

// 一、你正在设计一个简单的报名系统，只有年龄在 18 到 60 岁之间，并且已经 填写了电话号码的用户才允许报名成功
// 请写一段代码来判断一个用户是否可以报名，并打印相应提示
let user = {
  name: '小王',
  age: 16,
  phone: '12345678901',
};

if (user.age > 18 && user.age < 60 && user.phone !=="") {
  console.log("可以报名")
}else{
  console.log("不可报名")
}
//  二、一个班有 5 名学生的成绩，存储在一个数组中。请你用循环统计每位同学的成绩，并输出等级：
//- 90 以上是 A
//- 80~89 是 B
//- 60~79 是 C
//- 60 以下是 D
let scores = [92, 85, 73, 59, 66];

// 现在有一个购物车，里面是若干商品对象，每个商品都有 `name`、`price` 和 `isMemberOnly`（是否会员专属）。
// 请打印出所有可以给非会员顾客购买的、价格低于 100 的商品名称。
let cart = [
  { name: '牙刷', price: 20, isMemberOnly: false },
  { name: '剃须刀', price: 120, isMemberOnly: false },
  { name: '面膜', price: 88, isMemberOnly: true },
  { name: '洗发水', price: 99, isMemberOnly: false },
];


