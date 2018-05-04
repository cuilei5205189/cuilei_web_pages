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
})();
