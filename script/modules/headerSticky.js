export default function headerStickyInit() {

    const stickyHeader = document.querySelector(".main_header");
    const $stickyContact = $(".nav_contact");
    const stickyLogin = document.querySelector(".main_header .header_login");
    const stickyAside = document.querySelector(".main_header .header_aside");
    const stickyPages = document.querySelector(".main_header .nav_pages");
    const stickyNav = document.querySelector(".main_header .header_nav");

    const option = {
        root: null,
        rootMargin: "-1px 0px 0px 0px",
        threshold: 1.0
    }
    
    const callback = function(entries, observer){
      entries.forEach(entry => {
          if (entry.intersectionRatio < 1)
          {
            stickyHeader.classList.add("main_header_sticky");
            $stickyContact.slideUp(300);
            stickyLogin.classList.add("header_login_sticky");
            stickyAside.classList.add("header_aside_sticky");
            stickyPages.classList.add("nav_pages_sticky");
            stickyNav.classList.add("header_nav_sticky");
          }
          else
          {
            stickyHeader.classList.remove("main_header_sticky");
            $stickyContact.slideDown(300);
            stickyLogin.classList.remove("header_login_sticky");
            stickyAside.classList.remove("header_aside_sticky");
            stickyPages.classList.remove("nav_pages_sticky");
            stickyNav.classList.remove("header_nav_sticky");
          }
      });
    }
    
    const observer = new IntersectionObserver(callback, option);
    
    observer.observe(stickyHeader);
}