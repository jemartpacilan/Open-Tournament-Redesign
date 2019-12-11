var pages = document.getElementsByClassName('pages');

function open_slide_menu() {
  document.getElementById('sidemenu').classList.toggle('active');
  document.getElementsByClassName('sidemenu__overlay')[0].style.left = '0';
}

function close_slide_menu() {
  document.getElementById('sidemenu').classList.toggle('active');
  document.getElementsByClassName('sidemenu__overlay')[0].style.left = '-100%'
}

function toggle_dropdown() {
  var x = document.getElementById('navbar__elem__pages');
  if (x.className === "navbar__elem__pages") {
    x.className += " responsive";
  } else {
    x.className = "navbar__elem__pages";
  }
}

window.onscroll = () => {
  const nav = document.querySelector('#navbarPrime');
  if (this.scrollY <= 10) nav.className = '';
  else
    nav.className = 'scroll';

};
