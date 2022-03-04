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

  // scroll to top
  $(window).on("scroll", function () {
    console.log($(window).scrollTop());
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

  var roadmapSwiper = new Swiper(".roadmap-swiper-boxes", {
    slidesPerView: 5,
    spaceBetween: 0,
    centeredSlides: true,
    initialSlide: 1,
    allowTouchMove: false,
    navigation: {
      nextEl: ".roadmap-navigation-next",
      prevEl: ".roadmap-navigation-prev",
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
        if (this.activeIndex > 1) {
          $(".roadmap .roadmap-first-swiper").removeClass("my-active-swiper");
          let activeIndex = this.activeIndex;
          let slides = this.slides;
          slides.each(function (item, index) {
            console.log(index, activeIndex);
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

  // nav
  $(".main-header .nav-item").on("click", function () {
    console.log($(this).attr("data-section"));
    let id = $(this).attr("data-section");
    window.scrollTo({
      top: $(`.${id}`).offset().top,
      behavior: "smooth",
    });
  });

  // tabs
  $(".roadmap-tab").on("click", function () {
    $(".roadmap-tab").removeClass("active");
    $(this).addClass("active");
    let id = $(this).attr("data-tab");
    const activeTab = $(`#${id}`);
    $(".roadmap-box-outer").removeClass("active");
    activeTab.addClass("active");
  });
});
