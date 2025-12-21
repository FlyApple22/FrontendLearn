// const price = [19.9, 100, 35.5, 8];
// const newArray = price.map((e) => {
//   return (e * 0.8).toFixed(2);
// });
// console.log(newArray);

// const comments = [
//   { id: 1, text: 'nice', isHidden: false },
//   { id: 2, text: 'spam', isHidden: true },
//   { id: 3, text: 'cool', isHidden: false },
// ];

// const newArray = comments.filter((e) => e.text === 'nice');

// console.log(newArray);

// const cart = [
//   { name: 'apple', price: 3, count: 2 },
//   { name: 'milk', price: 6, count: 1 },
//   { name: 'bread', price: 4, count: 3 },
// ];

// const total = cart.reduce((sum, item) => {
//   return sum + item.price * item.count;
// }, 0);

// console.log(total);

// const users = ['Alice', 'Bob', 'Cindy'];
// users.forEach((item, index) => {
//   console.log(`${index + 1}${item} `);
// });

// const apiUsers = [
//   {
//     id: 1,
//     first_name: 'Jett',
//     last_name: 'Brown',
//     created_at: '2025-12-01T10:20:30Z',
//   },
//   {
//     id: 2,
//     first_name: 'Ada',
//     last_name: 'Lovelace',
//     created_at: '2025-11-09T08:00:00Z',
//   },
// ];

// const uiUsers = apiUsers.map((e) => {
//   return {
//     id: e.id,
//     fullname: e.first_name + e.last_name,
//     created_at: e.created_at.slice(0, 10),
//   };
// });
// console.log(uiUsers);

// const products = [
//   { id: 1, name: 'React Handbook', tags: ['frontend', 'react'] },
//   { id: 2, name: 'Node in Action', tags: ['backend', 'node'] },
//   { id: 3, name: 'JavaScript Basics', tags: ['frontend', 'js'] },
// ];
// const keyword = 'ReAcT';

// let loweKeyword = keyword.toLowerCase();

// const newArray = products.filter((item) => {
//   let lowerName = item.name.toLowerCase().includes(loweKeyword);
//   let lowerTags = item.tags.some((e) => e.toLowerCase().includes(loweKeyword));
//   return lowerName || lowerTags;
// });

// console.log(newArray);

const todos = [
  { id: 1, text: 'learn map', done: false },
  { id: 2, text: 'learn reduce', done: false },
  { id: 3, text: 'learn react', done: false },
];
const targetId = 2;

const newArray = todos.map((item) => {
  if (item.id === targetId) {
    item.done = true;
  } else {
    item.done = false;
  }
  return item;
});

console.log(newArray);
console.log(todos);
