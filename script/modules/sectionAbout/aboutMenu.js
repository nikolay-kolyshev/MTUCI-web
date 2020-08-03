import CircleIcon from "./aboutCircle.js"

export default function aboutMenuInit() {

    const aboutNavbarItems = document.querySelectorAll(".section_about .about_all_navbar_item");

    const CircleIconStandart = new CircleIcon();
    CircleIconStandart.GetValue("employment");


    aboutNavbarItems.forEach((item)=>{
      item.onclick = function(){

        if (item.classList.contains("about_all_navbar_item_active"))
          return;

        for (let element of aboutNavbarItems)
          element.classList.remove("about_all_navbar_item_active");

        item.classList.add("about_all_navbar_item_active");
        CircleIconStandart.GetValue(item.id);
        
      }
    });

}
