window.onload = ()=> {

    let i = 0;

    // DOM-elements  
  
    const stickyHeader = document.querySelector(".main_header");
    const $stickyContact = $(".nav_contact");
    const stickyLogin = document.querySelector(".header_login");
    const stickyAside = document.querySelector(".header_aside");
    const stickyPages = document.querySelector(".nav_pages");

    const aboutNavbarItems = document.querySelectorAll(".about_all_navbar_item");

    // Section-Intro: Start svg-img Animation

    let svgStart = new Walkway ({
      selector: "#univesity_image",
      duration: "2500",
      easing: "easeOutQuint"
    });
    svgStart.draw((()=> {
        document.querySelector("#univesity_image").classList.add("university_image_end_animation");
      })());


    // Header: Event Position Sticky

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
          }
          else
          {
            stickyHeader.classList.remove("main_header_sticky");
            $stickyContact.slideDown(300);
            stickyLogin.classList.remove("header_login_sticky");
            stickyAside.classList.remove("header_aside_sticky");
            stickyPages.classList.remove("nav_pages_sticky");
          }
      });
    }

    const observer = new IntersectionObserver(callback, option);

    observer.observe(stickyHeader);


  // Section-About: Circle animation

  function Circle(el){
    $(el).circleProgress({
      fill: { color: "#330066" },
      emptyFill: "white",
      lineCap: "round",
      startAngle: -1.57,
      size: 346,
      animationStartValue: 0.35,
      insertMode: "append"
    })
    .on("circle-animation-progress", function(event, progress, stepValue){
      $(this).find(".about_job_percentage .percentage_value")
      // .text(parseInt(String(stepValue.toFixed(2)).substr(2))+"%")
      .text((parseFloat(stepValue.toFixed(2))) + "+")
    });
  }

  Circle(".about_job");



  // Section-About: Navbar

  aboutNavbarItems.forEach((item)=>{
    item.onclick = function(){

      if (item.classList.contains("about_all_navbar_item_active"))
        return;

      for (element of aboutNavbarItems)
        element.classList.remove("about_all_navbar_item_active");
      item.classList.add("about_all_navbar_item_active");
      
    }
  });





}