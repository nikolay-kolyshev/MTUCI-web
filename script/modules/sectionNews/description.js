export default function newsCardDecriptionInit() {

    const $cards = $(".section_news .news_all_item"),
          $decorate = $(".news_decorate div");

    $cards.each(function(){
        $(this).hover(
            ()=>{
                $(this).find(".news_all_item_inner_main_description").slideDown(400);
                
                let cardColor = $(this).find(".news_all_item_inner_main_title_small").css("backgroundColor");
                $decorate.css("backgroundColor", cardColor);
            },
            ()=>{
                $(this).find(".news_all_item_inner_main_description").slideUp(400);
                $decorate.css("backgroundColor", "#E5E0EB");
            }
        )
    });

}



