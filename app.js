const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const slideMenu = document.querySelectorAll('.slideMenu');

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function close() {
  mainMenu.style.top = '-100%';
}

slideMenu.forEach((slideMenuCheck) => {
  slideMenuCheck.addEventListener('click', close);
});

openMenu.addEventListener('click', show);

closeMenu.addEventListener('click', close);
