// 1.成绩评级系统
// 你需要写一个函数grade，接收成绩数组，输出每个学生的评级（A/B/C/D）
// 90 以上为 A,70~89为 B,70~89为C, 60以下为D。
let scores = [96, 82, 74, 59];
for (let i = 0; i < scores.length; i++) {
  if (scores[i] > 90) {
    console.log('A');
  } else if (scores[i] > 70) {
    console.log('B');
  } else if (scores[i] > 60) {
    console.log('C');
  } else {
    console.log('D');
  }
}

// 2.员工信息展示
// 你拿到一个员工对象数组，每个对象有多个字段，要求打印出每位员工的所有信息
let staffList = [
  { name: 'Jack', dept: '研发', age: 28 },
  { name: 'Lily', dept: '设计', age: 25 },
];
for (let i = 0; i < staffList.length; i++) {
  console.log(
    staffList[i].name + ' ' + staffList[i].dept + ' ' + staffList[i].age
  );
}

// 3.用户名校验
// 编写一段逻辑，判断用户名是否符合要求：
// ✅长度 4~12 ✅开头不是数字  ✅不能包含空格
let username = 'Tom123';

// 4.查找共同好友
// 你和朋友都列出了一份好友名单，请找出你们的共同好友（数组中相同名字）
let myFriends = ['小明', '小红', '小刚'];
let yourFriends = ['小红', '小华', '小刚'];

for (let i = 0; i < myFriends.length; i++){
  for (let j = 0;j<yourFriends.length;j++){
    if (myFriends[i]===yourFriends[j]) {
      console.log(myFriends[i])
    }
  }
}
// 5.任务优先级过滤器
// 你有一组任务对象，表示任务标题和优先级（1~5）。请找出所有优先级为 4 或 5 的任务，并打印它们。
let tasks = {
  写周报: 3,
  备课: 5,
  开会: 4,
  喝水: 1,
};

for (const key in tasks) {
  if(tasks[key]===4||tasks[key]===5){
    console.log(key)
  }
}