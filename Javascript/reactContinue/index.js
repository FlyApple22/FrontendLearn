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

a.forEach((item) => {
  console.log(item);
});
