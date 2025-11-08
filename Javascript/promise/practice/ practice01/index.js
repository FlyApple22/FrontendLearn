// 发送 GET 请求 获取所有文章，并打印前 5 条文章的标题。
async function getPosts() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const post = await res.json();
    const fifthPosts = post.slice(0, 5);
    fifthPosts.forEach((post) => {
      console.log(`${post.id}  ${post.title}`);
    });
    console.log(post);
  } catch (err) {
    console.log(err);
  }
}

// 发送 GET 请求 获取 ID = 3 的文章，并打印标题与正文。

// 使用 GET 请求 获取 ID=1 的文章评论

// 发送 POST 请求 创建一篇文章。
async function createPost() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        title: '123',
        body: '123',
        userId: 1,
      }),
    });
    const result = await res.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

createPost();
