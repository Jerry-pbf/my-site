const likeBtn = document.getElementById('likeBtn');
const likeCountEl = document.getElementById('likeCount');

let likes = Number(localStorage.getItem('travelLikes')) || 0;
likeCountEl.textContent = likes;

likeBtn.onclick = function () {
  likes = likes + 1;
  likeCountEl.textContent = likes;
  localStorage.setItem('travelLikes', likes);
}