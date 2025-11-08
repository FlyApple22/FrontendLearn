// 定义函数
function mokeRequest(callback) {
  console.log('开始请求数据');
  let data = [1, 1];
  callback(data);
}

function addNumbers(arr) {
  const sum = arr[0] + arr[1];
  console.log(`总数是 ${sum}`);
}

function jianNumbers(arr) {
  const sum = arr[0] - arr[1];
  console.log(`总数是 ${sum}`);
}

// 执行函数
// 加法
mokeRequest(addNumbers);

// 减法
mokeRequest(jianNumbers);
