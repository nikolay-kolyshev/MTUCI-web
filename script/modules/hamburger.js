export default function hamburgerInit() {
    
    const hamburger = $('#hamburger');
    const menu = $('.main_header .header_nav');
    const title = $('.main_header .header_aside')

    let isClosed = false;

    hamburger.click(function () {
        burgerTime();
    });

    function burgerTime() {
      if (isClosed == true) {
        hamburger.removeClass('is-open');
        hamburger.addClass('is-closed');
        menu.removeClass('open');
        title.removeClass('open');
        isClosed = false;
      }
      else {
        hamburger.removeClass('is-closed');
        hamburger.addClass('is-open');
        menu.addClass('open');
        title.addClass('open');
        isClosed = true;
      }
    }

}