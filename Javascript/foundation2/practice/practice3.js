// 1.统计激活会员数量
// 你从数据库中获取了一个表示会员激活状态的对象，true代表会员，统计其中会员总数并打印。

let members = {
  小明: true,
  小红: false,
  小李: true,
  小张: true,
};

// 2.筛选用户名中包含字母 a 的人
// 一个社交平台需要筛选所有用户名中包含字母 “a” 的用户，打印他们的名字。
// includes("a")方法可以用于判断该元素是否含有字母 “a”
// 使用两种方法 for循环 、for of循环

let usernames = ['alice', 'bob', 'anna', 'mike'];

// 3.筛选可打折商品
// 一份商品清单中只有价格低于 100 元且不是会员专属的商品才能参与限时折扣，请筛选出这些商品。并打印
// 使用两种循环

let goods = [
  { name: '耳机', price: 99, isMemberOnly: false },
  { name: '音响', price: 150, isMemberOnly: true },
  { name: '键盘', price: 80, isMemberOnly: false },
];
