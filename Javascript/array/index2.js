// const users = [
//   { id: 1, name: 'Alice', age: 18 },
//   { id: 2, name: 'Bob', age: 19 },
//   { id: 3, name: 'Cindy', age: 20 },
// ];
// const targetId = 2;
// const newArray = users.map((item) => {
//   if (item.id === targetId) {
//     return { ...item, name: 'Bobby' };
//   }
//   return item;
// });

// console.log(newArray);

// const todos = [
//   { id: 1, text: 'learn map', done: false },
//   { id: 2, text: 'learn react', done: true },
// ];
// const targetId = 1;

// const newArray = todos.map((item) => {
//   if (item.id === targetId) {
//     return { ...item, done: !item.done };
//   }
//   return item;
// });

// console.log(newArray);

// const products = [
//   { id: 1, name: 'Book' },
//   { id: 2, name: 'Pen' },
//   { id: 3, name: 'Cup' },
// ];
// const removeId = 3;

// const newArray = products.filter((item) => {
//   return item.id !== removeId;
// });
// console.log(newArray);

// const notifs = [
//   { id: 1, title: 'A', unread: true },
//   { id: 2, title: 'B', unread: false },
//   { id: 3, title: 'C', unread: true },
// ];

// const newArray = notifs.map((item) => {
//   if (item.unread === true) {
//     return { ...item, unread: false };
//   }
//   return item;
// });
// console.log(newArray);

// const users = [
//   { id: 1, name: 'Alice', profile: { city: 'Beijing', level: 3 } },
//   { id: 2, name: 'Bob', profile: { city: 'Tianjin', level: 2 } },
// ];

// const newArray = users.map((item) => {
//   return { ...item, profile: { ...item.profile, city: 'shanghai' } };
// });

// console.log(newArray);

const cart = [
  { id: 1, name: 'Apple', count: 2 },
  { id: 2, name: 'Milk', count: 1 },
];
const item = { id: 2, name: 'Milk' };

function addToCart(cart, item) {
  const newArray = cart.map((e) => {
    if (e.id === item.id) {
      return { ...e, count: e.count + 1 };
    } else {
      return e;
    }
  });
  return newArray;
}

console.log(addToCart(cart, item));
