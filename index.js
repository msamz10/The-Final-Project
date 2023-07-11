function openMenu() {
  document.body.classList += " menu--open"
      
  }
  
  function closeMenu() {
      document.body.classList.remove('menu--open')
  
  
  }



const slider = document.querySelector(".slideshow");

const prev = document.querySelector(".slick-prev");
const next = document.querySelector(".slick-next");

const prev1 = document.querySelector(".slick-prev1");
const next1 = document.querySelector(".slick-next1");

prev.addEventListener("click", function () {
  slider.style.transform = "translate(-50%)";
});

prev1.addEventListener("click", function () {
  slider.style.transform = "translate(0%)";
});

next.addEventListener("click", function () {
  slider.style.transform = "translate(-50%)";
});

next1.addEventListener("click", function () {
  slider.style.transform = "translate(0%)";
});



