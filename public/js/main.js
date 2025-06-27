const savedTheme = localStorage.getItem('theme') || 'light';
document.getElementById('theme-style').href = `/css/${savedTheme}.css`;

document.getElementById('theme-toggle').addEventListener('click', () => {
  const currentTheme = document.getElementById('theme-style').getAttribute('href').includes('dark') ? 'dark' : 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.getElementById('theme-style').href = `/css/${newTheme}.css`;
  localStorage.setItem('theme', newTheme);
});



// Hamburger menü
document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('active');
});

const searchToggle = document.getElementById("search-toggle");
const searchBar = document.getElementById("search-bar");

searchToggle.addEventListener("click", () => {
  searchBar.style.display = searchBar.style.display === "flex" ? "none" : "flex";
});