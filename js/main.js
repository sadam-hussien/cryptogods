// Some random colors
const colors = ["#FADC94"];

const numBalls = 100;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = "0.3em";
  ball.style.height = ball.style.width;

  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12,
  };

  // let anim = el.animate(
  //   [
  //     { transform: "translate(0, 0)" },
  //     { transform: `translate(${to.x}rem, ${to.y}rem)` },
  //   ],
  //   {
  //     duration: (Math.random() + 1) * 2000, // random duration
  //     direction: "alternate",
  //     fill: "both",
  //     iterations: Infinity,
  //     easing: "ease-in-out",
  //   }
  // );
});
let count = 0;

function playAudio() {
  if (count === 0) {
    count = 1;
    document.getElementById("my_audio").play();
  } else {
    count = 0;
    document.getElementById("my_audio").pause();
  }
}

$(function () {
  var aboutSwiper = new Swiper(".about-swiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var gallerySwiper = new Swiper(".gallery-swiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      nextEl: ".slide-left",
      prevEl: ".slide-right",
    },
    breakpoints: {
      // when window width is >= 320px
      576: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
      767: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 4,
      },
    },
  });

  // set element container
  function setContainer(el, container) {
    el.css(
      "marginLeft",
      parseInt(container.css("marginLeft")) +
        parseInt(container.css("paddingLeft")) +
        "px"
    );
  }

  setContainer($("#gallery-swiper"), $("#gallery-container"));
  setContainer($("#roadmap-content"), $("#roadmap-container"));
  $(window).on("resize", function () {
    setContainer($("#gallery-swiper"), $("#gallery-container"));
    setContainer($("#roadmap-content"), $("#roadmap-container"));
  });

  var faqsSwiper = new Swiper(".faq-swiper", {
    // direction: "vertical",
    slidesPerView: 1,
    pagination: {
      el: ".faq-swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".faq-slide-left",
      prevEl: ".faq-slide-right",
    },
  });

  // scroll to top/
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 200) {
      $(".scrolltotop").addClass("active");
    } else {
      $(".scrolltotop").removeClass("active");
    }
  });

  $(".scrolltotop").on("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // function roadMapSwiper(el, destroy) {
  //   // ".roadmap-swiper-boxes"
  //   var s = new Swiper(el, {
  //     slidesPerView: 3,
  //     spaceBetween: 0,
  //     centeredSlides: true,
  //     initialSlide: 1,
  //     allowTouchMove: false,
  //     navigation: {
  //       nextEl: ".roadmap-navigation-next",
  //       prevEl: ".roadmap-navigation-prev",
  //     },
  //     breakpoints: {
  //       576: {
  //         initialSlide: 1,
  //         slidesPerView: 3,
  //       },
  //       767: {
  //         slidesPerView: 3,

  //         initialSlide: 1,
  //       },
  //       991: {
  //         initialSlide: 2,
  //         slidesPerView: 5,
  //       },
  //     },
  //     on: {
  //       init: function () {
  //         $(".roadmap .roadmap-first-swiper").addClass("my-active-swiper");
  //         let activeIndex = this.activeIndex;
  //         if (activeIndex == this.params.initialSlide) {
  //           $(".roadmap-navigation-prev").addClass(
  //             "roadmap-navigation-prev-disabled"
  //           );
  //         } else {
  //           $(".roadmap-navigation-prev").removeClass(
  //             "roadmap-navigation-prev-disabled"
  //           );
  //         }
  //       },
  //       slideChange: function () {
  //         if (this.activeIndex == this.params.initialSlide) {
  //           $(".roadmap-navigation-prev").addClass(
  //             "roadmap-navigation-prev-disabled"
  //           );
  //         } else {
  //           $(".roadmap-navigation-prev").removeClass(
  //             "roadmap-navigation-prev-disabled"
  //           );
  //         }
  //         if (this.activeIndex > 1) {
  //           $(".roadmap .roadmap-first-swiper").removeClass("my-active-swiper");
  //           let activeIndex = this.activeIndex;
  //           let slides = this.slides;
  //           slides.each(function (item, index) {
  //             if (activeIndex === slides.length - 1) {
  //               $(this).addClass("my-last-swiper");
  //             } else {
  //               $(this).removeClass("my-last-swiper");
  //             }
  //             if (activeIndex > index) {
  //               $(this).addClass("my-prev-swiper");
  //             } else {
  //               $(this).removeClass("my-prev-swiper");
  //             }
  //           });
  //         }
  //       },
  //     },
  //   });
  //   // if (destroy) {
  //   //   console.log("s.params.initialSlide" + el);
  //   //   s.slideTo(s.params.initialSlide);
  //   //   s.destroy();
  //   // }
  // }
  var s1 = new Swiper(".roadmap-swiper-boxes-1", {
    slidesPerView: 3,
    spaceBetween: 0,
    centeredSlides: true,
    initialSlide: 1,
    allowTouchMove: false,
    navigation: {
      nextEl: "#tab-1 .roadmap-navigation-next",
      prevEl: "#tab-1 .roadmap-navigation-prev",
    },
    breakpoints: {
      576: {
        initialSlide: 1,
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 3,

        initialSlide: 1,
      },
      991: {
        initialSlide: 1,
        slidesPerView: 5,
      },
    },
    on: {
      init: function () {
        $(".roadmap .roadmap-first-swiper").addClass("my-active-swiper");
        let activeIndex = this.activeIndex;
        if (activeIndex == 1) {
          $(".roadmap-navigation-prev").addClass(
            "roadmap-navigation-prev-disabled"
          );
        } else {
          $(".roadmap-navigation-prev").removeClass(
            "roadmap-navigation-prev-disabled"
          );
        }
      },
      slideChange: function () {
        if (this.activeIndex == 1) {
          $(".roadmap-navigation-prev").addClass(
            "roadmap-navigation-prev-disabled"
          );
        } else {
          $(".roadmap-navigation-prev").removeClass(
            "roadmap-navigation-prev-disabled"
          );
        }
        if (this.activeIndex >= 1) {
          $(".roadmap .roadmap-first-swiper").removeClass("my-active-swiper");
          let activeIndex = this.activeIndex;
          let slides = this.slides;
          slides.each(function (item, index) {
            console.log(activeIndex, index);
            if (activeIndex === slides.length - 1) {
              $(this).addClass("my-last-swiper");
            } else {
              $(this).removeClass("my-last-swiper");
            }
            if (activeIndex > index) {
              $(this).addClass("my-prev-swiper");
            } else {
              $(this).removeClass("my-prev-swiper");
            }
          });
        }
      },
    },
  });

  var s2 = new Swiper(".roadmap-swiper-boxes-2", {
    slidesPerView: 3,
    spaceBetween: 0,
    centeredSlides: true,
    initialSlide: 1,
    allowTouchMove: false,
    navigation: {
      nextEl: "#tab-2 .roadmap-navigation-next",
      prevEl: "#tab-2 .roadmap-navigation-prev",
    },
    breakpoints: {
      576: {
        initialSlide: 1,
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 3,

        initialSlide: 1,
      },
      991: {
        initialSlide: 1,
        slidesPerView: 5,
      },
    },
    on: {
      init: function () {
        $(".roadmap .roadmap-first-swiper").addClass("my-active-swiper");
        let activeIndex = this.activeIndex;
        if (activeIndex == 1) {
          $(".roadmap-navigation-prev").addClass(
            "roadmap-navigation-prev-disabled"
          );
        } else {
          $(".roadmap-navigation-prev").removeClass(
            "roadmap-navigation-prev-disabled"
          );
        }
      },
      slideChange: function () {
        if (this.activeIndex == 1) {
          $(".roadmap-navigation-prev").addClass(
            "roadmap-navigation-prev-disabled"
          );
        } else {
          $(".roadmap-navigation-prev").removeClass(
            "roadmap-navigation-prev-disabled"
          );
        }
        if (this.activeIndex >= 1) {
          $(".roadmap .roadmap-first-swiper").removeClass("my-active-swiper");
          let activeIndex = this.activeIndex;
          let slides = this.slides;
          slides.each(function (item, index) {
            console.log(activeIndex, index);
            if (activeIndex === slides.length - 1) {
              $(this).addClass("my-last-swiper");
            } else {
              $(this).removeClass("my-last-swiper");
            }
            if (activeIndex > index) {
              $(this).addClass("my-prev-swiper");
            } else {
              $(this).removeClass("my-prev-swiper");
            }
          });
        }
      },
    },
  });

  var s3 = new Swiper(".roadmap-swiper-boxes-3", {
    slidesPerView: 3,
    spaceBetween: 0,
    centeredSlides: true,
    initialSlide: 1,
    allowTouchMove: false,
    navigation: {
      nextEl: "#tab-3 .roadmap-navigation-next",
      prevEl: "#tab-3 .roadmap-navigation-prev",
    },
    breakpoints: {
      576: {
        initialSlide: 1,
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 3,

        initialSlide: 1,
      },
      991: {
        initialSlide: 1,
        slidesPerView: 5,
      },
    },
    on: {
      init: function () {
        $(".roadmap .roadmap-first-swiper").addClass("my-active-swiper");
        let activeIndex = this.activeIndex;
        if (activeIndex == 1) {
          $(".roadmap-navigation-prev").addClass(
            "roadmap-navigation-prev-disabled"
          );
        } else {
          $(".roadmap-navigation-prev").removeClass(
            "roadmap-navigation-prev-disabled"
          );
        }
      },
      slideChange: function () {
        if (this.activeIndex == 1) {
          $(".roadmap-navigation-prev").addClass(
            "roadmap-navigation-prev-disabled"
          );
        } else {
          $(".roadmap-navigation-prev").removeClass(
            "roadmap-navigation-prev-disabled"
          );
        }
        if (this.activeIndex >= 1) {
          $(".roadmap .roadmap-first-swiper").removeClass("my-active-swiper");
          let activeIndex = this.activeIndex;
          let slides = this.slides;
          slides.each(function (item, index) {
            console.log(activeIndex, index);
            if (activeIndex === slides.length - 1) {
              $(this).addClass("my-last-swiper");
            } else {
              $(this).removeClass("my-last-swiper");
            }
            if (activeIndex > index) {
              $(this).addClass("my-prev-swiper");
            } else {
              $(this).removeClass("my-prev-swiper");
            }
          });
        }
      },
    },
  });

  var s4 = new Swiper(".roadmap-swiper-boxes-4", {
    slidesPerView: 3,
    spaceBetween: 0,
    centeredSlides: true,
    initialSlide: 1,
    allowTouchMove: false,
    navigation: {
      nextEl: "#tab-4 .roadmap-navigation-next",
      prevEl: "#tab-4 .roadmap-navigation-prev",
    },
    breakpoints: {
      576: {
        initialSlide: 1,
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 3,

        initialSlide: 1,
      },
      991: {
        initialSlide: 1,
        slidesPerView: 5,
      },
    },
    on: {
      init: function () {
        $(".roadmap .roadmap-first-swiper").addClass("my-active-swiper");
        let activeIndex = this.activeIndex;
        if (activeIndex == 1) {
          $(".roadmap-navigation-prev").addClass(
            "roadmap-navigation-prev-disabled"
          );
        } else {
          $(".roadmap-navigation-prev").removeClass(
            "roadmap-navigation-prev-disabled"
          );
        }
      },
      slideChange: function () {
        if (this.activeIndex == 1) {
          $(".roadmap-navigation-prev").addClass(
            "roadmap-navigation-prev-disabled"
          );
        } else {
          $(".roadmap-navigation-prev").removeClass(
            "roadmap-navigation-prev-disabled"
          );
        }
        if (this.activeIndex >= 1) {
          $(".roadmap .roadmap-first-swiper").removeClass("my-active-swiper");
          let activeIndex = this.activeIndex;
          let slides = this.slides;
          slides.each(function (item, index) {
            console.log(activeIndex, index);
            if (activeIndex === slides.length - 1) {
              $(this).addClass("my-last-swiper");
            } else {
              $(this).removeClass("my-last-swiper");
            }
            if (activeIndex > index) {
              $(this).addClass("my-prev-swiper");
            } else {
              $(this).removeClass("my-prev-swiper");
            }
          });
        }
      },
    },
  });

  // roadMapSwiper(".roadmap-swiper-boxes-1");
  // roadMapSwiper(".roadmap-swiper-boxes-2");
  // roadMapSwiper(".roadmap-swiper-boxes-3");
  // roadMapSwiper(".roadmap-swiper-boxes-4");

  // nav
  $(".main-header .nav-item").on("click", function () {
    let id = $(this).attr("data-section");
    window.scrollTo({
      top: $(`.${id}`).offset().top,
      behavior: "smooth",
    });
  });

  // $(".roadmap-tab .roadmap-tab-1").click();

  // tabs
  $(".roadmap-tab").on("click", function () {
    let id = $(this).attr("data-tab");
    // tab-3
    // let idSplit =
    //   parseInt(id.slice(4)) == 1
    //     ? parseInt(id.slice(4))
    //     : parseInt(id.slice(4)) - 1; // 2
    // tab-
    // roadMapSwiper(`#${"tab-" + idSplit} .roadmap-swiper-boxes`, true);
    // roadMapSwiper(`#${id} .roadmap-swiper-boxes`);
    $(".roadmap-tab").removeClass("active");
    $(this).addClass("active");
    const activeTab = $(`#${id}`);
    $(".roadmap-box-outer").removeClass("active");
    activeTab.addClass("active");
  });
});
