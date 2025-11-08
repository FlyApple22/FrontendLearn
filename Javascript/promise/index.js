// ✅ PUT：整体更新文章内容（所有字段都会被覆盖）
async function updatePost() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1',
      {
        method: 'PUT', // ✅ PUT = 整体覆盖
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'New Title',
          body: 'New Content',
          userId: 1,
        }),
      }
    );

    const result = await response.json();

    console.log('✅ 更新成功！新的标题：', result.title);
  } catch (err) {
    console.error('❌ 更新文章失败：', err);
  }
}

updatePost();
