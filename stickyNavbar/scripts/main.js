const navbarElement = document.querySelector(".navbar");
window.addEventListener("scroll", changeNavbar);
function changeNavbar() {
  if (window.scrollY >= navbarElement.offsetHeight + 150) {
    navbarElement.classList.add("navbar-alt");
    navbarElement.classList.remove("navbar");
  } else {
    navbarElement.classList.remove("navbar-alt");
    navbarElement.classList.add("navbar")
  }
}
