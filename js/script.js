function posicionarMenu() {
  var altura_del_header = $('.jumbotron').outerHeight(true);
  var altura_del_menu = $('.navbar').outerHeight(true);

  if ($(window).scrollTop() >= altura_del_header){
    $('.navbar').addClass('fixed');
    $('.contenedor').css('margin-top', (altura_del_menu) + 'px');
  } else {
    $('.navbar').removeClass('fixed');
     $('.contenedor').css('margin-top', '0');
  }
}
posicionarMenu();

$(window).scroll(function() {    
  posicionarMenu();
});
