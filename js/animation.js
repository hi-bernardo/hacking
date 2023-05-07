ScrollReveal({ reset: true });
let tittle = document.querySelectorAll(".tittle"),
  content = document.querySelectorAll(".content"),
  card = document.querySelectorAll(".members"),
  animation = {
    distance: "50px",
    duration: 500,
    easing: "ease-in-out",
  };
ScrollReveal().reveal(tittle, animation);
ScrollReveal().reveal(content, animation);
ScrollReveal().reveal(card, animation);
