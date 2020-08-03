import sliderInit from "./modules/slider.js";
import hamburgerInit from "./modules/hamburger.js";
import sectionAboutBtnInit from "./modules/buttons.js";
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
    decorateBackInit();
    sectionAboutBtnInit();

}