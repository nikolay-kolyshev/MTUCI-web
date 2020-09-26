export default function sportSelectInit () {

  const gallery = document.querySelectorAll(".section_sport .sport_gallery_item");
  const infoImgSectors = document.querySelectorAll(".section_sport .sport_info_img_item_photo");
  const infoBlock = document.querySelector(".section_sport .sport_info");

  gallery.forEach( item => {
    item.onclick = ()=> {

      //Сделать тут скролл до информации
      const itemImgDataSrc = item.querySelector("img").dataset.src;
      for (let sector of infoImgSectors)
        sector.src = itemImgDataSrc;

      for (let img of gallery)
        if (img.classList.contains("sport_gallery_item_active"))
          img.classList.remove("sport_gallery_item_active");

      item.classList.add("sport_gallery_item_active");
      infoBlock.scrollIntoView({block: "nearest", behavior: "smooth"});

    }
  })

};