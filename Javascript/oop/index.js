// 1. 写一个构造函数 `User(username)`
// 2. 每个用户有属性：
//    - `username`
//    - `messages`（数组）
// 3. 所有用户共享方法：
//    - `postMessage(msg)`：添加留言
//    - `listMessages()`：打印所有留言
// 4. 创建两个用户，让他们分别发几条留言，并展示留言列表。
// 5. 必须用 prototype 实现共享方法。

function User(username) {
  this.userName = username;
  this.messages = [];
}

User.prototype.postMessage = function (msg) {
  this.messages.push(msg);
};

User.prototype.listMessages = function () {
  this.messages.forEach((element) => {
    console.log(element);
  });
};

const student1 = new User('111111111');
student1.postMessage(`111111111`);
student1.postMessage(`222222222`);
student1.listMessages();
console.log(student1);
