// 1.提取不及格成绩
// 定义一个函数  getFailed(scores)，返回所有小于 60 的成绩数组。
let firstScores = [85, 59, 40, 100, 60];

function getFailed(scores) {
  scores = scores.filter((n) => n < 60);

  return scores;
}

console.log(getFailed(firstScores));

// 2.所有分数+5分
// 创建函数  addBonus(scores) ，将所有成绩都加 5 分并返回新的数组（不改变原数组）
let secondScores = [70, 80, 90];

// 3.找出第一个不及格的人名
// 有一组学生对象，每个包含  name  和  score 。编写函数  findFirstFail(students)  找出第一个不及格（<60）学生的姓名。
let students = [
  { name: 'Amy', score: 80 },
  { name: 'Bob', score: 55 },
  { name: 'Cindy', score: 90 },
];

// 4.自定义排序分数从高到低
// 写一个函数  sortDesc(arr) ，将分数从高到低排序。
let thirdScores = [70, 85, 60, 90];

// 5.打分等级
// 请创建函数  gradeList(scores) ，将一组分数映射为 A/B/C/D/F。
// | 分数范围 | 等级 |
// | 90-100   | A    |
// | 80-89    | B    |
// | 70-79    | C    |
// | 60-69    | D    |
// | < 60     | F    |
let fifthScores = [95, 83, 72, 50];

// 6.过滤出字符串中的数字
// 写一个函数  onlyNumbers(arr) ，从混合数组中提取出所有数字。
let mixArray = [1, 'hello', 3, true, '5', 9];

// 7.打乱顺序
// 写一个函数  shuffle(arr) ，返回数组的乱序版本   提示Math.random()生成 0到1的随机数
