//筛选可打折商品，一份商品清单中只有价格低于 100 元且不是会员专属的商品才能参与限时
//折扣，请筛选出这些商品。并打印

let good = [
  { name: "耳机", price: 99, isMemberOnly: false },
  { name: "音响", price: 150, isMemberOnly: true },
  { name: "键盘", price: 80, isMemberOnly: false },
];

for (let i = 0; i < goods.length; i++) {
  if (goods[i].price < 100 && goods[i].isMemberOnly == !true) {
    console.log(goods[i].name);
  }
}

//你和朋友都列出了一份好友名单，请找出你们的共同好友（数组中相同名字

let myFriends = ["小明", "小红", "小刚"];
let yourFriends = ["小红", "小华", "小刚"];

for (let i = 0; i < myFriends.length; i++) {
  for (let j = 0; j < yourFriends.length; j++) {
    if (myFriends[i] === yourFriends[j]) {
      console.log(myFriends[i]);
    }
  }
}

//统计前10天的支出总和，假设每天支出都是10元
let sum = 10;
let count = 0;
for (let i = 0; i < 10; i++) {
  count += 10;
}
console.log(count);

//两种方式打印商品
let goods = ["苹果", "香蕉", "橘子"];

// for (let i = 0; i < goods.length; i++) {
//   console.log(goods[i]);
// }

for (let item of goods) {
  console.log(item);
}

//跳过编号为 3 的订单，不处理它

let item = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < item.length; i++) {
  if (item[i] === 3) {
    continue;
  }
  console.log(item[i]);
}

//用模板字符串构造欢迎语 你好XXX
let names = "小红";

console.log(`你好 ${names}`);

//将所有用户 ID 的值平方并打印
let ids = [2, 3, 4];
for (let i = 0; i < ids.length; i++) {
  ids[i] = ids[i] * ids[i];
  console.log(ids[i]);
}

//筛选价格大于 100 的商品
let prices = [80, 120, 200];

for (let i = 0; i < prices.length; i++) {
  if (prices[i] > 100) {
    console.log(prices[i]);
  }
}

//获取用户昵称并打印
let user = { nickname: "小王" };
console.log(user.nickname);

//获取用户的详细地址
let data = { user: { address: { city: "北京" } } };
console.log(data.user.address.city);

