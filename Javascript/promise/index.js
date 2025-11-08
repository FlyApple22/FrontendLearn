// 语法糖 复杂的语法转换成简单的语法 实际作用效果一样
// async await

async function getAllBlog() {
  const res = await fetch('https://www.example.com/api/getAllBlopgs');
  const resJson = await res.json();
  return resJson;
}
