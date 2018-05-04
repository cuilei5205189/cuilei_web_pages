(function() {
  'use strict';
  // Your custom JavaScript goes here
  
  // navbar
  $('.ui.navbar .search-icon > i')
    .click(function () {
      var icon = $(this)
      if (icon.text() === 'search') {
        icon.text('close').parents('.content').addClass('searching')
      } else {
        icon.text('search').parents('.content').removeClass('searching')
        }
    })

  //sidebar
  $('.ui.sidebar')
    .sidebar('setting', 'dimPage', false)
    .sidebar('attach events', ' .menu-icon')
    .sidebar('attach events', ' .close-icon')

  $('.ui.navbar .menu')
    .clone()
    .appendTo('.ui.sidebar')

  //slick carousel
  $('.ui.hero.carousel')
    .slick({
      autoplay: true,
      autoplaySpeed: 2500,
      arrows: true,
      prevArrow : '<button class="ui prev button bottom"><i class="material-icons">chevron_left</i></button>',
      nextArrow : '<button class="ui next button bottom"><i class="material-icons">chevron_right</i></button>',

      responsive: [
        {
          breakpoint: 767,
          settings: {
            dots: true
          }
        }
      ]
    });
})();

