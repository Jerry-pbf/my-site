const btn = document.getElementById("travelBtn");

btn.addEventListener("mouseenter", () => {
  const x = (Math.random() - 0.5) * 200;
  const y = (Math.random() - 0.5) * 120;
  btn.style.transform = `translate(${x}px, ${y}px)`;
});