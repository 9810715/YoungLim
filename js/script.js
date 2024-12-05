document.addEventListener(`DOMContentLoaded`, function () {
  AOS.init();

  var swiper = new Swiper(".bannerSwiper", {
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
      clickable: true,
    },
  });

  var swiper = new Swiper(".sec1Swiper", {
    slidesPerView: 4,
    spaceBetween: 36,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var menu = ["키친/붙박이장", "바스/타일", "도어", "창호", "몰딩/월/마루"];

  var swiper = new Swiper(".tabSwiper", {
    slidesPerView: 1,
    spaceBetween: 15,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + menu[index] + "</span>";
      },
    },
  });

  const buttons = document.querySelectorAll(`.tab_menu p`);

  for (const btn of buttons) {
    btn.addEventListener(`click`, function () {
      this.classList.add(`on`);
      for (const siblings of buttons) {
        if (siblings !== this) {
          siblings.classList.remove(`on`);
        }
      }

      const tab = this.getAttribute(`data-tab`);
      const tabBox = document.querySelectorAll(`.tabs div`);

      for (const tabContent of tabBox) {
        tabContent.classList.remove(`on`);
      }

      const changeTab = document.querySelector(`#${tab}`);
      changeTab.classList.add(`on`);
    });
  }
});
