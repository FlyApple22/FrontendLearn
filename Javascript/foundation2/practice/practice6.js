// 1.筛选符合条件的课程
// 你有一个课程列表，每门课程包含名称、学时、是否限选。请输出所有“限选课程”中，学时大于等于 30 的课程名
let courses = [
  { name: '数据结构', hours: 48, elective: false },
  { name: '影视鉴赏', hours: 24, elective: true },
  { name: '人工智能导论', hours: 36, elective: true },
];
for (let i = 0; i < courses.length; i++) {
  if (courses[i].elective === true && courses[i].hours >= 30 && courses) {
    console.log(courses[i].name);
  }
}
// 2.员工打卡异常检测
// 某公司保存了员工每天是否打卡的布尔数组，现在你需要找出那些打卡成功次数小于 5 次的员工名字。
let attendance = {
  Alice: [true, false, true, false, false, true, false],
  Bob: [true, true, true, true, true, true, true],
  Tom: [false, false, false, true, false, false, false],
};

// 3.学生选课统计
// 你收到一个二维数组，表示 3 位学生各自选修的课程列表，请输出所有人选修的课程总数。
let selections = [
  ['高数', '英语', '思修'], // 学生1
  ['思修', '编程', '体育'], // 学生2
  ['英语', '编程', '绘画'], // 学生3
];

// 4.判断是否为质数
// 你要判断一个输入的正整数是否为质数（只能被 1 和自身整除），只需判断到 n-1 即可，一旦发现能整除的立即结束。
let n = 17;
let isPrime = true;

// 5.从对象中找出年龄最大的学生
// 一个学生信息对象包含若干学生的年龄信息，请找出年龄最大者的名字。
let students = {
  小明: 19,
  小红: 22,
  小强: 21,
};
