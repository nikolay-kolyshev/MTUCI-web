window.onload = ()=> {

    let i = 0;

    // DOM-elements  
  
    const stickyHeader = document.querySelector(".main_header");
    const $stickyContact = $(".nav_contact");
    const stickyLogin = document.querySelector(".header_login");
    const stickyAside = document.querySelector(".header_aside");
    const stickyPages = document.querySelector(".nav_pages");

    const aboutNavbarItems = document.querySelectorAll(".about_all_navbar_item");


     // Section-About: Circle animation

    class CircleIcon {

      values = new Map ([
        [
          "teachers",
          {
            name: "Квалифицированных<br/>преподавателей",
            numb: 450,
            symbol: "+",
            percent: 1,
            description: `Наши преподаватели - это те люди,
                          которые смогут обучить вас той профессии,
                          в которой вы видите себя в будующем`
          }
        ],
        [
          "budget",
          {
            name: "Бюджетных мест<br/>для абитуриентов",
            numb: 180,
            symbol: "+",
            percent: 1,
            description: `Для каждого способного студента у
                          нас есть высокие стипендии,
                          а также места на бюджетной основе.`
          }
        ],
        [
          "education",
          {
            name: "Образовательных<br/>программ",
            numb: 60,
            symbol: "+",
            percent: 1,
            description: `Наличие огромного количества направлений,
                          позволит вам индивидуально подобрать курс.`
          }
        ],
        [
          "dormitory",
          {
            name: "Свободных мест<br/>в общежитии",
            numb: 1200,
            symbol: "+",
            percent: 1,
            description: `Наши общежития оборудованы и
                          готовы к эксплуатации студентами`
          }
        ],
        [
          "employment",
          {
            name: "Трудоустройство<br/>после вуза",
            numb: 85,
            symbol: "%",
            percent: 0.85,
            description: `Наши студенты имеют отличную 
                          репутацию среди работодателей 
                          благодаря знаниям, полученным у нас.`
          }
        ]
      ])
    
      GetValue(valueName, args = null){
        if (args != null){
    
          if (this.values.has(valueName)){
            return;
          }
    
          this.values.set(valueName, args);
        
        }
        let value = this.values.get(valueName);
        this.CreateCircle(value);
      }
    
      CreateCircle(value){
    
        (function Circle(el){
    
          $(el).circleProgress({
            value: value.percent,
            fill: { color: "#330066" },
            emptyFill: "white",
            lineCap: "round",
            startAngle: -1.57,
            size: 346,
            animationStartValue: 0.35,
            insertMode: "append"
          })
          .on("circle-animation-progress", function(event, progress, stepValue){
    
            $(this).find(".about_more_icon_inner_percentage .percentage_value")
              .text(parseInt((parseFloat(stepValue.toFixed(2)) * (1/value.percent*value.numb))) + value.symbol);
    
            $(this).find(".about_more_icon_inner_percentage .percentage_name")
              .html(value.name);
          
            });
    
        })(".about_more_icon_inner");
      
        $(".about_more_description > .description_text").text(value.description);
    
      }
    
    }
    

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



  // Section-About: Navbar

  const CircleIconStandart = new CircleIcon();
  CircleIconStandart.GetValue("employment");


  aboutNavbarItems.forEach((item)=>{
    item.onclick = function(){

      if (item.classList.contains("about_all_navbar_item_active"))
        return;

      for (element of aboutNavbarItems)
        element.classList.remove("about_all_navbar_item_active");
      CircleIconStandart.GetValue(item.id);
      item.classList.add("about_all_navbar_item_active");
      
    }
  });



  particlesJS("particles_js", {
    particles: {
      number: {
        value: 50,
        density: { enable: true, value_area: 789.1850086415761 }
      },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#ffffff" },
        polygon: { nb_sides: 6 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.5528314585136049,
        random: true,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 5,
        random: false,
        anim: { enable: false, speed: 0, size_min: 0, sync: true }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.6569881101176175,
        width: 1
      },
      move: {
        enable: true,
        speed: 4,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "bounce",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 446.3379995942385, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });

}