gsap.to(".top_img",{
    duration:1.5,
    height:"100vh",
})
gsap.to(".middle_img",{
    duration:2,
    height:"100vh",
})
gsap.to(".third_img",{
    duration:3,
    height:"100vh",
})

gsap.to(".navbar",{
    backgroundColor:"#1a1a1a",
    duration:0.5,
    height:"6vmax",
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -9%",
        scrub:1
    }
})

/* Swiper js */

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  

  var swiper2 = new Swiper(".mySwiper2", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-120%", 0, -500],
      },
      next: {
        shadow: true,
        translate: ["120%", 0, -500],
      },
    },
  });