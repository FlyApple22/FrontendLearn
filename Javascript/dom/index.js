// 获取html  document.documentElement
// 获取body  document.body
// 通过 Id 去获取 document.getElementById();
// 通过 Class 去获取 document.getElementsByClassName(); 返回的是类数组
// 通过 Tag 去获取 document.getElementsByTagName(); 返回的是类数组
// 通过 Name 去获取 document.getElementsByName();  处理表单
// 通过选择器获取. document.querySelector(); 匹配符合条件的第一个
//               document.querySelectorAll(); 匹配所有

// 文本操作 textContent->不会加载样式
//         innerText -> 加载样式
//         innerHtml -> 标签

// 属性操作 getAttribute() setAttribute()

// 事件绑定
// html里写
// Dom元素绑定
// addEventListener 可以绑定多个
// let a = document.getElementById('aaa');
// a.addEventListener('click', function () {
//   console.log(123);
// });

//你的网站上展示了一批商品，每个商品以  <div class="product">  标签表示。现在需
//要给每个商品添加“热销商品”字样，并将背景改为淡⻩色。

// function markHotProducts(className) {
//   let a = document.getElementsByClassName(className);
//   for (const b of a) {
//     b.textContent = b.textContent + '-热销商品';
//     b.style.backgroundColor = '#fff8dc';
//   }
// }
// markHotProducts('products');

//你的网站有一批段落，现在需要分析出哪一段文字最⻓，并将它背景设置为淡绿色，同时在控
//制台输出所有段落的字数。
// function highlightLongestParagraph() {
//   let a = document.getElementsByClassName('para');
//   let b = 0;
//   let c = null;
//   for (const element of a) {
//     console.log(element.textContent.length);
//     if (element.textContent.length > b) {
//       b = element.textContent.length;
//       c = element;
//     }
//   }
//   c.style.backgroundColor = '#fff8dc ';
// }
// highlightLongestParagraph();

let e = document.getElementById('survey');

for (const element of e) {
  element.addEventListener('click', function () {
    element.style.backgroundColor = '#fff8dc';
  });
}
