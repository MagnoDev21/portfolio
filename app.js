// prompt
//let nome = prompt("Seja Bem-vindo, qual seu nome?");
//document.getElementById("nome").innerHTML = nome;

// função menu
function clickMenu() {
  if (menu.style.display == 'block') {
    menu.style.display = 'none'
  } else {
    menu.style.display = 'block'
  }
}

function clickMenu() {
  var menuContainer = document.getElementById("menu-container");
  if (menuContainer.style.transform === "translateX(-100%)") {
    menuContainer.style.transform = "translateX(0)";
  } else {
    menuContainer.style.transform = "translateX(-100%)";
  }
}


//submenu
const hogwartsLink = document.getElementById('hog');
const submenu = document.querySelector('.submenu');

hogwartsLink.addEventListener('click', () => {
  if (submenu.style.display === 'none') {
    submenu.style.display = 'block';
  } else {
    submenu.style.display = 'none';
  }
});