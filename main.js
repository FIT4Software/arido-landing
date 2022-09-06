document.addEventListener("DOMContentLoaded", function (event) {
  const header = document.getElementById("header");
  const menu = document.getElementById("menu");

  const sticky = header.offsetTop;
  function addStickyHeader() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky-bg");
    } else {
      header.classList.remove("sticky-bg");
    }
  }

  function showHideMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
    } else {
      menu.classList.add("showMenu");
    }
  }

  function handleClickOutsideMenu(event) {
    const menuMobile = document.getElementById("menu-mobile");
    console.log(menuMobile === event.target);
    if (menuMobile === event.target) {
      if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
      } else {
        menu.classList.add("showMenu");
      }
    } else {
      menu.classList.remove("showMenu");
    }
  }

  window.onscroll = function () {
    addStickyHeader();
  };

  //   menuMobile.addEventListener("click", showHideMenu, false);

  document.addEventListener("click", handleClickOutsideMenu, false);

  pannellum.viewer("panorama", {
    type: "equirectangular",
    panorama: "assets/image/pan1-opt.jpg",
    autoLoad: true,
    autoRotate: -3,
    compass: false,
    hfov: 150,
  });
});
