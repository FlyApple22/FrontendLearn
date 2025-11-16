import axios from 'axios';

// 获取 ID=2 的用户信息
// async function getId(id) {
//   try {
//     const res = await axios.get(
//       `https://jsonplaceholder.typicode.com/users/${id}`
//     );
//     console.log(res.data);
//   } catch (error) {}
// }
// getId(2);
// async function getId(id) {
//   try {
//     const rest = await fetch(
//       `https://jsonplaceholder.typicode.com/users/${id}`
//     );
//     const post = await rest.json();
//     console.log(post);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getId(2);
// 获取用户 ID=1 的所有文章，并：1. 输出文章数量 2. 输出每篇文章标题（只列标题）
// async function getId(id) {
//   try {
//     const res = await axios.get(
//       `https://jsonplaceholder.typicode.com/users/${id}/posts`
//     );
//     res.data.forEach((element) => {
//       console.log(element.title);
//     });
//     console.log(res.data.length);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getId(1);
// async function getId(id) {
//   try {
//     const rest = await fetch(
//       `https://jsonplaceholder.typicode.com/users/${id}/posts`
//     );
//     const post = await rest.json();
//     post.forEach((element) => {
//       console.log(element.title);
//     });
//     console.log(post.length);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getId(1);

// 把文章 ID=1 的内容更改 为
// {
//   "title": "New Title",
//   "body": "New Content",
//   "userId": 1
// }

// async function change(id) {
//   try {
//     const { data } = await axios.put(
//       `https://jsonplaceholder.typicode.com/posts/${id}`,
//       { title: 'New Title', body: 'New Content', userId: 1 },
//       {
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//       }
//     );
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// change(1);

// async function change(id) {
//   try {
//     const rest = await fetch(
//       `https://jsonplaceholder.typicode.com/posts/${id}`,
//       {
//         method: 'put',
//         headers: {
//           'Content-type': 'application/json',
//         },
//         body: JSON.stringify({
//           title: 'New Title',
//           body: 'New Content',
//           userId: 1,
//         }),
//       }
//     );
//     const post = await rest.json();
//     console.log(post);
//   } catch (error) {
//     console.log(error);
//   }
// }
// change(1);
// 把 ID=2 的文章，只更新 title: "Patched Title"
// async function change(id) {
//   try {
//     const { data } = await axios.put(
//       `https://jsonplaceholder.typicode.com/posts/${id}`,
//       { title: 'Patched Title' },
//       {
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//       }
//     );
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// change(2);

// async function change(id) {
//   try {
//     const rest = await fetch(
//       `https://jsonplaceholder.typicode.com/posts/${id}`,
//       {
//         method: 'put',
//         headers: {
//           'Content-type': 'application/json',
//         },
//         body: JSON.stringify({
//           title: 'Patched Title',
//         }),
//       }
//     );
//     const post = await rest.json();
//     console.log(post);
//   } catch (error) {
//     console.log(error);
//   }
// }
// change(2);

// async function a(email) {
//   try {
//     const { data } = await axios.post(
//       `https://api.apiopen.top/api/sendVerificationCode`,
//       { mail: email }
//     );
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// a('1363415964@qq.com');

// async function b() {
//   try {
//     const { data } = await axios.post(`https://api.apiopen.top/api/register`, {
//       account: '1363415964@qq.com',
//       code: '138805',
//       password: '123456',
//     });
//     if (data.code === 200) {
//       console.log('请求成功');
//     } else {
//       console.log('请求失败');
//     }
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// b();

// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjE5MzYsImlkIjoxOTM2LCJjcmVhdGVkQXQiOiIyMDI1LTExLTE1IDEwOjU3OjAwIiwidXBkYXRlZEF0IjoiMjAyNS0xMS0xNSAxMDo1NzowMCIsImRlbGV0ZWRBdCI6bnVsbCwiYWNjb3VudCI6IjEzNjM0MTU5NjRAcXEuY29tIiwibGV2ZWwiOjAsImV4cCI6MTc2Mzc4MDIyMCwiaXNzIjoiYXBpX29wZW4iLCJuYmYiOjE3NjMxNzQ0MjB9._nyE66ggU7R_q24ppnBeH_C3ZR_zr0KNJjhD0ezWi5A'

// async function c() {
//   try {
//     const { data } = await axios.post('https://api.apiopen.top/api/login', {
//       account: '1363415964@qq.com',
//       password: '123456',
//     });

//     return data;
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// }

// let data = await c();
// console.log(data);
let token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjE5MzYsImlkIjoxOTM2LCJjcmVhdGVkQXQiOiIyMDI1LTExLTE1IDEwOjU3OjAwIiwidXBkYXRlZEF0IjoiMjAyNS0xMS0xNSAxMDo1NzowMCIsImRlbGV0ZWRBdCI6bnVsbCwiYWNjb3VudCI6IjEzNjM0MTU5NjRAcXEuY29tIiwibGV2ZWwiOjAsImV4cCI6MTc2Mzc4Mzc3NSwiaXNzIjoiYXBpX29wZW4iLCJuYmYiOjE3NjMxNzc5NzV9.zQJjFUT3zjoMtZmTgzaI0tk6kdPAlcn5Oba47GmW6NQ';
// console.log(token);

// async function a() {
//   try {
//     const { data } = await axios.post(
//       `https://api.apiopen.top/api/publishDynamic`,
//       {
//         images: [
//           'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Sunset_2007-1.jpg/500px-Sunset_2007-1.jpg',
//           'https://upload.wikimedia.org/wikipedia/commons/8/87/Red_sunset.jpg',
//         ],
//         text: '今天心情真好!',
//       },
//       { headers: { token: token } }
//     );
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// a();

async function a() {
  try {
    const { data } = await axios.get(
      `https://api.apiopen.top/api/getPersonDynamicList`,
      { params: { page: 0, size: 10 }, headers: { token: token } }
    );
    console.log(data);
    console.log(data.result.list);
  } catch (error) {
    console.log(error);
  }
}
a();
