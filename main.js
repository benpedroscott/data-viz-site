"use strict";

let menuNav = document.getElementById('menu_nav');

let menuTrigger = document.getElementById('menu_trigger');

function menuToggle() {
  if (menuNav.style.display === "flex") {
    menuNav.style.display = "none";
  }
    else {
      menuNav.style.display = "flex";
    }
    console.log("The menu has been toggled!")
}

  menuTrigger.onclick = menuToggle;

    window.onresize = function () {
      if (window.innerWidth >= 800) {
        menuNav.removeAttribute("style");
    }  ;
  }
