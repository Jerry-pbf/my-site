document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById("travelBtn");
  const hintText = document.getElementById("gameHint");
  let isActive = false; // 逃跑开关，默认关闭

  // 第一次点击：开启逃跑模式
  btn.addEventListener("click", () => {
    if(!isActive){
      isActive = true;
      hintText.innerText = "Oh no! Now the button is running away from you!";
    }
  })

  // 只有开关打开之后，鼠标靠近才会跑
  btn.addEventListener("mouseenter", () => {
    if(isActive){
      const x = (Math.random() - 0.5) * 500;
      const y = (Math.random() - 0.5) * 460;
      btn.style.transform = `translate(${x}px, ${y}px)`;
    }
  });
})