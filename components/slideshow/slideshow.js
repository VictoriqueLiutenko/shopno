document.addEventListener('DOMContentLoaded', function() {
  let slideStateAboutUs = {
    currentIndex: 0,
    dots: document.getElementsByClassName("js-aboutUsDot"),
    slides: document.getElementsByClassName("slideshow-slides--aboutUs")
  }
  let slideStateTeammate = {
    currentIndex: 0,
    dots: document.getElementsByClassName("js-teammateDot"),
    slides: document.getElementsByClassName("slideshow-slides--teammate"),
    slidesInfo: document.getElementsByClassName("slideshow-textInfoSlides"),
    prevBtn: document.querySelector(".slideshow-slideButton--previous"),
    nextBtn: document.querySelector(".slideshow-slideButton--next")
  }

  showSlides(slideStateAboutUs);
  let intervalIdAboutUs = setInterval(function() {
    showSlides(slideStateAboutUs);
  }, 5000);

  showSlides(slideStateTeammate);
  let intervalIdTeammate = setInterval(function() {
    showSlides(slideStateTeammate);
  }, 5000);	

  onDotClick(slideStateAboutUs, intervalIdAboutUs);
  onDotClick(slideStateTeammate, intervalIdTeammate);

  slideStateTeammate.prevBtn.onclick = function prev() {
    slideStateTeammate.currentIndex = slideStateTeammate.currentIndex - 2;
    showSlides(slideStateTeammate);
    clearInterval(intervalIdTeammate);
    intervalIdTeammate = setInterval(function() {
      showSlides(slideStateTeammate);
    }, 5000);
  }

  slideStateTeammate.nextBtn.onclick = function next() {
    showSlides(slideStateTeammate);
    clearInterval(intervalIdTeammate);
    intervalIdTeammate = setInterval(function() {
      showSlides(slideStateTeammate);
    }, 5000);
  }

  function showSlides(slideState) {
    if (slideState.currentIndex < 0) 
      slideState.currentIndex = slideState.slides.length - 1;

    if (slideState.currentIndex >= slideState.slides.length) 
      slideState.currentIndex = 0;

    for (let i = 0; i < slideState.slides.length; i++) 
      slideState.slides[i].style.display = "none"; 

    for (let i = 0; i < slideState.dots.length; i++) 
      removeClass(slideState.dots[i], "slideshow-dot--active");
    
    slideState.slides[slideState.currentIndex].style.display = "block";

    if (slideState.slidesInfo) {
      for (let i = 0; i < slideState.slides.length; i++) 
        slideState.slidesInfo[i].style.display = "none";
      slideState.slidesInfo[slideState.currentIndex].style.display = "block";
    }

    addClass(slideState.dots[slideState.currentIndex], "slideshow-dot--active");
    slideState.currentIndex++;
  }

  function onDotClick(slideState, interval) {
    for (let i = 0; i < slideState.dots.length; i++) {
      slideState.dots[i].onclick = function currentSlide() {
        slideState.currentIndex = i;
        showSlides(slideState);
        clearInterval(interval);
        interval = setInterval(function() {
          showSlides(slideState);
        }, 5000);
      }
    }
  }
});
