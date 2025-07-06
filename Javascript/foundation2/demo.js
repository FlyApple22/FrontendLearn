// 循环

// for
// for (初始值; 条件; 循环后的操作) {}
// break 完全跳出循环
// continue 跳出当前条件 但继续下一个循环

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

// 对象循环 for in
// for (let 属性 in 对象) {}

// 数组循环 for of
// for (let 元素 of 数组) {}

// while
// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// do while
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);
