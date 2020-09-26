import sliderInit from "./modules/slider.js";
import hamburgerInit from "./modules/hamburger.js";
import buttonsInit from "./modules/buttons.js";
import headerStickyInit from "./modules/headerSticky.js";
import svgIntroInit from "./modules/svgIntro.js";
// import CircleIcon from "./modules/sectionAbout/aboutCircle.js";
import aboutMenuInit from "./modules/sectionAbout/aboutMenu.js";
import decorateBackInit from "./modules/decorateBack.js";
import newsCardDecriptionInit from "./modules/sectionNews/description.js";
import instagramPostsInit from "./modules/instagramPosts.js";
import mapInit from "./modules/map.js";
import formValidateInit from "./modules/footer/formValidate.js";
import popupInit from "./modules/popup.js";
import calendarInit from "./modules/sectionEvents/calendar.js";
import sportSelectInit from "./modules/sectionSport/sportSelect.js";
import animateScroll from "./modules/animate_scroll.js";
import scrollUpUnit from "./modules/scroll_up.js";

window.onload = ()=> {

    svgIntroInit();
    headerStickyInit();
    hamburgerInit();
    aboutMenuInit();
    // decorateBackInit("particles_science");
    // decorateBackInit("particles_partners"); // При наведении на партнёра поменять цвет частиц
    // decorateBackInit("particles_sport");
    // decorateBackInit("particles_creation");
    newsCardDecriptionInit();
    instagramPostsInit();
    mapInit();
    formValidateInit();
    popupInit();
    calendarInit();
    sportSelectInit();
    sliderInit();
    animateScroll();
    scrollUpUnit();
    
    // Buttons Initializtion
    buttonsInit(".section_about .about_more .description_button"); // Section About
    buttonsInit(".section_science .science_info .description_button"); // Section Science
    buttonsInit(".section_partners .partners_info .partners_info_item_description_button"); // Section Partners
    buttonsInit(".section_sport .sport_info .sport_info_description_button"); // Section Sport

}