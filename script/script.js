import sliderInit from "./modules/slider.js";
import hamburgerInit from "./modules/hamburger.js";
import buttonsInit from "./modules/buttons.js";
import headerStickyInit from "./modules/headerSticky.js";
import svgIntroInit from "./modules/svgIntro.js";
// import CircleIcon from "./modules/sectionAbout/aboutCircle.js";
import aboutMenuInit from "./modules/sectionAbout/aboutMenu.js";
import decorateBackInit from "./modules/decorateBack.js";

window.onload = ()=> {

    headerStickyInit();
    sliderInit();
    hamburgerInit();
    svgIntroInit();
    aboutMenuInit();
    decorateBackInit("particles_science");
    decorateBackInit("particles_partners");
    
    // Buttons Initializtion
    buttonsInit(".section_about .about_more .description_button"); // Section About
    buttonsInit(".section_science .science_info .description_button"); // Section Science

}