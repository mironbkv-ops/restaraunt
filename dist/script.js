// Анимация загрузки сайта
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.classList.add("fade-out");
  setTimeout(() => {
    loader.style.display = "none";
  }, 800);
});