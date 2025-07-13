// 去除前后空格
// trim()

function trimCopy(str) {
  // 去掉前后空格
  let start = 0;
  let end = str.length - 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      start = i;
      break;
    }
  }

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== ' ') {
      end = i;
      break;
    }
  }

  let line = '';
  for (let i = start; i <= end; i++) {
    line = line + str[i];
  }

  return line;
}
