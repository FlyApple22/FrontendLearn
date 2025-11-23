// 手写一个构造函数 `Person`，要求如下：
// 1. 构造函数接收一个参数 name，并把 name 挂到实例上。
// 2. 在 `Person.prototype` 上添加一个方法 `sayName()`，要求打印 name。
// 3. 创建一个实例 p1，name 为“张三”，并调用 `p1.sayName()`。

// 手写一个构造函数 `Student`：
// 1. 构造函数接收 name，并把它挂在实例上。
// 2. 在原型上添加一个属性 `school = "TUT"`（注意：是属性不是方法）。
// 3. 创建一个实例 s1，name 为“李四”。
// 4. 使用 `hasOwnProperty` 分别判断 name 和 school 是否是实例自己的属性，并打印结果。

// 延续上一题的 Student，继续做下面的事情：
// 1. 使用 `"name" in s1` 判断 s1 是否可以访问 name
// 2. 使用 `"school" in s1` 判断 s1 是否可以访问 school
// 3. 使用 `"age" in s1` 判断 s1 是否可以访问 age
// 4. 请写出三行返回什么，并写代码验证

// 完成以下任务：
// 1. 创建对象 parent，里面有属性 value = 100。
// 2. 再创建对象 child（空对象）。
// 3. 让 child 能通过原型链访问到 parent 的 value。
// 4. 最后打印 child.value。

// 你写一个构造函数 Car，不需要属性。
// 1. 创建一个实例 c1。
// 2. 打印以下 3 个表达式的结果：
//    - `Car.prototype.constructor === Car`
//    - `c1.constructor === Car`
//    - `c1.__proto__.constructor === Car`
// 3. 验证它们的结果。

// 1. 创建对象 base，里面有属性 x = 10。
// 2. 使用 Object.create(base) 创建对象 obj。
// 3. 打印 obj.x，使其输出 10。
// 4. 完整手写代码。

// 按以下要求写代码：
// 1. 创建构造函数 Animal，在原型上写方法 eat：打印“动物吃东西”。
// 2. 创建构造函数 Dog。
// 3. 让 Dog 继承 Animal（使用 Object.create）。
// 4. 在 Dog 的原型上写一个同名方法 eat，打印“狗吃骨头”。
// 5. 创建实例 d1，并调用 d1.eat()，输出应该是“狗吃骨头”。

// 完全手写以下结构：
// 1. 构造函数 A，在 A.prototype 上加属性 a = 1
// 2. 构造函数 B，使 B.prototype 继承 A.prototype【使用 Object.create】
// 3. 在 B.prototype 上加属性 b = 2
// 4. 创建实例 obj，并给 obj 添加属性 c = 3
// 5. 使用代码输出以下判断：

// 手写以下结构：
// - 对象 grand，有属性 x = 1
// - 对象 parent，继承 grand，并有属性 y = 2
// - 对象 child，继承 parent，并有属性 z = 3

// 要求：
// 调用 `child.x`、`child.y`、`child.z` 分别得到 1、2、3。

// 完整写代码实现这三个层级。

// 手写代码，完成下面两个任务：

// 1. **让 obj 能从它的原型链上依次访问到 value2 和 value3**
