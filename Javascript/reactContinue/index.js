// 1. let && const var

// var 变量提升 作用域乱

// let const 块级作用域

// 2.模板字符串
// const stuName = 'Alan';
// const age = 18;

// console.log('我是 ' + stuName + ' , ' + '今年' + age);
// console.log(`我是 ${stuName} , 今年${age >= 18 ? '成年' : '未成年'}`);

// 3.解构
// const user = { code: 200, msg: '成功', data: { name: 'Alan', age: 18 } };

// const name1 = user.data.name;

// const { msg: message } = user;

// console.log(message, name1);

// let arr = [0, 1, 2, 3, 4, 5];
// let [a, b] = arr;

// console.log(a, b);

// 4. 展开运算符
// let arr1 = [0, 1];
// let arr2 = [2, 3, 4, 5, 6, 7];

// 把一个数组 分割成两个部分 第一部分是第一个元素 a => 2 第二部分是剩余所有的元素 arr3 => [3,4]
// let [a, ...arr3] = arr2;

// console.log(a, arr3);

// const user = { name: 'Alan', age: 18 };
// const address = { city: 'BeiJing' };

// const userInfo = { ...user, ...address };

// const userInfoNew = { ...userInfo, age: 20 };

// console.log(userInfo);
// console.log(userInfoNew);
// console.log(userInfo);

// 5.数组方法

// forEach 遍历数组 不会返回新的数组
let a = [1, 2, 3];

// a.forEach((item) => {
//   console.log(item);
// });

//Map:映射数组，返回新数组
// let newArray = a.map((e) => {
//   return e + 2;
// });
// console.log(newArray);

// let b = [
//   { name: 'Alan', age: 18 },
//   { name: 'Bob', age: 20 },
// ];

// let newArray = b.map((e) => {
//   return e.name;
// });
// console.log(newArray);

//filter:筛选数组，返回新数组

// let c = [1, 2, 3, 4, 5, 6];

// let newArray = c.filter((e) => {
//   return e % 2 === 0;
// });

// console.log(newArray);

// let b = [
//   { name: 'Alan', age: 18 },
//   { name: 'Bob', age: 20 },
//   { name: 'John', age: 17 },
// ];

// let newArray = b.filter((e) => {
//   return e.age >= 18;
// });

// console.log(newArray);

//reduce:把所有折叠成一个值，返回结果不一定
// let d = [1, 2, 3, 4];
// let result = d.reduce((total, e) => {
//   return total + e;
// });

// console.log(result);

// let max = d.reduce((max, e) => {
//   return e > max ? e : max;
// });
// console.log(max);

let f = [
  { name: 'apple', price: 10, count: 100 },
  { name: 'banana', price: 8, count: 80 },
  { name: 'orange', price: 5, count: 160 },
];

let total = f.reduce((total, e) => {
  return total + e.price * e.count;
}, 0);

console.log(total);
