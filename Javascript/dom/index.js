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
let a = document.getElementById('aaa');
a.addEventListener('click', function () {
  console.log(123);
});
