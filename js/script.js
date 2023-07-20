const toggleBtn = document.querySelector("#toggle_btn");
const dropdownMenu = document.querySelector("#dropdown_menu");
const navbarsMenu = document.querySelector(".bx-menu");
const FooterScrollUp = document.querySelector(".scroll-top");

toggleBtn.addEventListener("click", () => {
  //   dropdownMenu.classList.add("open");
  if (navbarsMenu.classList.contains("bx-menu")) {
    navbarsMenu.classList.remove("bx-menu");
    navbarsMenu.classList.add("bx-x");
    dropdownMenu.classList.add("open");
  } else {
    dropdownMenu.classList.remove("open");
    navbarsMenu.classList.remove("bx-x");
    navbarsMenu.classList.add("bx-menu");
  }
});

addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    if (dropdownMenu.classList.contains("open")) {
      dropdownMenu.classList.remove("open");
      navbarsMenu.classList.remove("bx-x");
      navbarsMenu.classList.add("bx-menu");
    }
  }
});
