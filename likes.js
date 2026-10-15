// 选中页面所有点赞按钮
const likeButtons = document.querySelectorAll('.likeBtn');

// 循环遍历每一个点赞按钮
likeButtons.forEach(button => {
  // 监听点击事件
  button.addEventListener('click', () => {
    // 在当前按钮内部找到显示点赞数字的span
    const countSpan = button.querySelector('.likeCount');
    // 把文字转成数字
    let count = parseInt(countSpan.textContent);
    // 点赞+1
    count++;
    // 更新页面上显示的数字
    countSpan.textContent = count;
  });
});