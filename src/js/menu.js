const menuPanel = document.querySelector(".menu-panel");
const menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  menuPanel.classList.toggle("open-menu");
});

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").style.top = "0px";
  } else {
    document.querySelector("header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};
