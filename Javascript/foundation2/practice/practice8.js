// 1.用户昵称长度验证
// 请你编写一个函数 isValidName(name) 用于判断一个用户的昵称是否合法。
// 合法昵称要求：去除前后空格后长度必须在 2 到 8 个字符之间。 .trim() .length

// one
function isValidName(name) {
  // two 去掉空格
  name = name.trim();
  // three 判断是否在2-8个字符
  // 三元运算符
  let result = name.length >= 2 && name.length <= 8 ? '合法' : '不合法';
  return result;
}
console.log(isValidName(' n  '));

// 2.统计字母 E 出现次数
//  有一段文本 "Excellent effort elevates everyone."，请编写代码统计字母  "e"（不区分大小写）出现的次数。
//  .toLowerCase()

function countE(testString) {
  // one 全部转成小写
  testString = testString.toLowerCase();
  // two 累加器循环计数
  let count = 0;
  for (let char of testString) {
    if (char === 'e') {
      count++;
    }
  }
  return count;
}

console.log(countE('Excellent effort elevates everyone.'));

// 3.邮箱后缀校验
// 用户提交了邮箱地址，请你判断这个邮箱是否以  .com  结尾。

function emailCheck(email) {
  //第一步
  if (email.endsWith('.com')) {
    return 'yes';
  } else {
    return 'no';
  }
}
console.log(emailCheck('1363415964@qqom'));
// 4.提取用户名首字母并大写
// 输入用户名，如 " alice "，请返回首字母的大写形式。例如返回 "A"

let name = '  alice  ';
function toUpper(name) {
  name = name.trim();
  name = name.charAt(0).toUpperCase() + name.slice(1, name.length);
  return name;
}

console.log(toUpper(name));

// 5.分割关键词为数组
// 一个输入框里填写了关键词 "apple, banana, orange"，请你将它拆分成数组。

// 6.输出长度超过5的单词
// 给定一句话 "JavaScript is very powerful and interesting" 请你打印出所有长度大于 5 的单词
let sentence = 'JavaScript is very powerful and interesting';

// 7.替换敏感词
// 网站评论系统中，有人留言 "I hate this product!"，请你把 "hate" 替换成 "dislike"。
let comment = 'I hate this product!';

// 8.将数组中每个字符串变大写
// 有一个字符串数组 ["red", "green", "blue"]，请你把它全部转换为大写字母形式。

// 9.过滤空字符串
// 有一个用户输入的数组 ，请你过滤掉空字符串和仅包含空格的字符串。
let arr = ['apple', ' ', 'banana', '', 'peach'];

// 10.统计每个单词长度
// 编写一个函数 wordLengths(sentence)，传入一句英文句子，如 "I love JavaScript"，返回每个单词的长度数组。
