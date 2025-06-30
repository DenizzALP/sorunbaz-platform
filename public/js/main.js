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


// Register site
function validateForm(event){
 

  let isValid = true;

  const userName = document.getElementById('userName')
  const email = document.getElementById('email')
  const password = document.getElementById('password')
 
  const userNameMsg = userName.parentElement.querySelector('.info-msg');
  const emailMsg = email.parentElement.querySelector('.info-msg');
  const passwordMsg = password.parentElement.querySelector('.info-msg');
  
  const userNameRegex = /^[a-zA-Z0-9_]{3,20}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^[a-zA-Z0-9@_-]{6,20}$/;

  if(!userNameRegex.test(userName.value)){
      userName.classList.add("invalid");
      userName.classList.remove("valid");
      isValid = false;
      userNameMsg.style.display = 'inline';
  }else{
      userName.classList.add("valid");
      userName.classList.remove("invalid");
      userNameMsg.style.display = 'none';
  }

  if(!emailRegex.test(email.value)){
      email.classList.add("invalid");
      email.classList.remove("valid");
      isValid = false;
      emailMsg.style.display = 'inline';
  }else{
      email.classList.add("valid");
      email.classList.remove("invalid");
      emailMsg.style.display = 'none';
  }

  if(!passwordRegex.test(password.value)){
      password.classList.add("invalid");
      password.classList.remove("valid");
      isValid = false;
      passwordMsg.style.display = 'inline';
  }else{
      password.classList.add("valid");
      password.classList.remove("invalid");
      passwordMsg.style.display = 'none';
  }
  
  if (!isValid) {
    event.preventDefault();
  }

  return isValid;

}
