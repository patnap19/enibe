// ANIMACJE W MENU

// Animacja związna z rozwijaniem oferty w menu mobilnym

const offerListTrigger = document.querySelector(".element--link-offer");

offerListTrigger.addEventListener("click", () => {
  offerListTrigger.classList.toggle("offer-active");
});

// Animacja związana z rozwiajniem menu mobilnego

const menuTrigger = document.querySelector(".nav__burger-container");
const menuContaier = document.querySelector(".main-nav");

menuTrigger.addEventListener("click", () => {
  menuContaier.classList.toggle("menu-active");

  if (offerListTrigger.classList.contains("offer-active")) {
    offerListTrigger.classList.remove("offer-active");
  }
});
