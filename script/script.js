window.onload = () =>{

    // const observer = new IntersectionObserver( 
    //   ([e]) => {
    //     e.target.classList.toggle('main_header_sticky', e.intersectionRatio < 1);
    //     // e.target.classList.toggle('main_header_sticky', e.intersectionRatio < 1);
    //   },
    //   {
    //     root: null,
    //     rootMargin: "-1px 0px 0px 0px",
    //     threshold: [1]
    //   }
    // );

    const social = document.querySelector(".nav_contact_social");

    const option = {
        root: null,
        rootMargin: "-1px 0px 0px 0px",
        threshold: 1.0
    }

    const callback = function(entries, observer){
      entries.forEach(entry => {
          if (entry.intersectionRatio < 1)
          {
            entry.target.classList.add('main_header_sticky');
            social.classList.add("social_sticky");
          }
          else
          {
            entry.target.classList.remove('main_header_sticky');
            social.classList.remove("social_sticky");
          }
      });
    }

    const stickyHeader = document.querySelector('.main_header');

    const observer = new IntersectionObserver(callback, option);

    observer.observe(stickyHeader);

}