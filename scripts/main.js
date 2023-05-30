// ANIMACJE W MENU

// Animacja związna z rozwijaniem oferty w menu mobilnym

const offerListTrigger = document.querySelector(".element--link-offer");
const offerListBtn = document.querySelector(".element--link-offer a");

if (window.innerWidth > 1000) {
  offerListBtn.addEventListener("click", () => {
    alert("wodsa");
  });
} else {
  offerListBtn.addEventListener("click", () => {
    offerListTrigger.classList.toggle("offer-active");
  });
}

// Animacja związana z rozwiajniem menu mobilnego

const menuTrigger = document.querySelector(".nav__burger-container");
const menuContaier = document.querySelector(".main-nav");

menuTrigger.addEventListener("click", () => {
  menuContaier.classList.toggle("menu-active");

  if (offerListTrigger.classList.contains("offer-active")) {
    offerListTrigger.classList.remove("offer-active");
  }
});

// Animacja związana z tytułem strony

const header = document.querySelector(".main-header");

window.addEventListener("load", () => {
  header.classList.add("header-active");
});

// Animacja dla sekcji about-us
const aboutUsSection = document.querySelector(".about-us");
const aboutUsDesc = document.querySelector(".about-us-description");

window.addEventListener("scroll", () => {
  if (window.scrollY > header.clientHeight / 3) {
    console.log(window.scrollY);
    aboutUsSection.classList.add("about-us--show");
  } else {
    aboutUsSection.classList.remove("about-us--show");
  }
});
