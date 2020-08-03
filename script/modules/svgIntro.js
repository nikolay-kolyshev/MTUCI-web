export default function svgIntroInit(){

    let svgStart = new Walkway ({
        selector: "#univesity_image",
        duration: "2500",
        easing: "easeOutQuint"
      });

    svgStart.draw(
        (()=> {
          document.querySelector("#univesity_image").classList.add("university_image_end_animation");
        })()
    );

}
