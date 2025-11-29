// Set

let set1 = new Set([1, 2, 3, 4]);

// 添加元素 add()
set1.add(5);
console.log(set1);

// 删除元素 delete()
set1.delete(5);
console.log(set1);

// 查询元素 has()
console.log(set1.has(5));

// 清空 clear()
// set1.clear();

// 可迭代 for of 遍历
for (const e of set1) {
  console.log(e);
}

// 去重
let arr = [1, 2, 2, 3, 3, 3];

let newArr = [...new Set(arr)];

console.log(newArr);

// Map
const map = new Map();

// 设置 key - value set()
map.set('name', 'Alan');
map.set(1, 'codeNumber');
map.set({ x: 1 }, '123');

// 读取 get()

map.get(1);
map.get('Alan');

// 判断存在 has()
map.has(1);

// 删除 delete
map.delete(1);

// 清空 clear()
map.clear9;
