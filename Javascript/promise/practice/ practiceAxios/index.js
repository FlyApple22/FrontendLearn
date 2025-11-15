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
async function change(id) {
  try {
    const { data } = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      { title: 'Patched Title' },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
change(2);

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
