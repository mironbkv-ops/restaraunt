// Анимация загрузки сайта
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.classList.add("fade-out");
  setTimeout(() => {
    loader.style.display = "none";
  }, 800);
});
const toggle = document.getElementById('themeToggle');
const body = document.body;

// Загружаем сохранённую тему
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
  toggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
} else {
  body.classList.add('dark');
}

// Переключение
toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  body.classList.toggle('light');

  const theme = body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);

  toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
});
const toTop = document.getElementById('toTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    toTop.classList.add('show');
  } else {
    toTop.classList.remove('show');
  }
});

toTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
