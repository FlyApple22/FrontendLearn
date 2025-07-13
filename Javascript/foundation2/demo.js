// 循环

// for
// for (初始值; 条件; 循环后的操作) {}
// break 完全跳出循环
// continue 跳出当前条件 但继续下一个循环

// for (let i = 1; i <= 5; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log(i);
// }

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

// 嵌套for循环

// for (let i = 0; i < 3; i++) {
//   let line = '';
//   for (let j = 0; j < 4; j++) {
//     line = line + ' a';
//   }
//   console.log(line);
// }

// "Alan"
// 字符串长度 length

console.log(a.length);

// charAt(index)
// 根据索引 找字符
console.log(a.charAt(1));

// slice(start,end)  从start截取到end 但是不包含end
// 截取字符串
console.log(a.slice(6, 11));

// indexOf("")
// 找到是否包含该字符串 并返回索引start 没有找到 就会返回 -1
console.log(a.indexOf('l'));

// includes("")
// 找到是否包含该字符串 返回布尔值
console.log(a.includes('Alan'));

// Alan字符串 我们想把Alan通过索引打印出来
// 1.判断有没有Alan 2.找到A的索引 3.打印

let startIndex = a.indexOf('Alan');
// if (startIndex !== -1) {
//   console.log(a.slice(startIndex, startIndex + 4));
// } else {
//   console.log('No Alan');
// }
// 三元运算符 条件 ? 成立 ：不成立
let b = 10;
b > 5 ? console.log('good') : console.log('bad');

// 大小写转化
// toUpperCase() 转大写 toLowerCase() 转小写

console.log(a.toUpperCase());
console.log(a.toLowerCase());

// 去除前后空格
// trim()

console.log(a.trim());

function trimCopy(string) {
  // 去掉前后空格
}

// split() 分割的字符
// 分割字符
let a = 'Hello World Alan';
console.log(a.split(' '));
