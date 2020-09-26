export default function sliderInit(){

    $(".science_slider_main").slick(
        {
            prevArrow:
                `<button type="button" class="slick-prev">
                    <svg id="science_arrow_left" xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61">
                        <circle id="Эллипс_64" data-name="Эллипс 64" cx="30.5" cy="30.5" r="30.5" fill="#306"/>
                        <g id="arrow" transform="translate(20.614 14.07)">
                        <path id="Контур_1" data-name="Контур 1" d="M112.788,15.5,126.228.269a.739.739,0,0,1,1.14,0,1,1,0,0,1,0,1.292L114.5,16.142l12.867,14.581a1,1,0,0,1,0,1.292.767.767,0,0,1-.567.271.744.744,0,0,1-.567-.271l-13.44-15.23A1,1,0,0,1,112.788,15.5Z" transform="translate(-112.556 0)" fill="none" stroke="#fff" stroke-width="3"/>
                        </g>
                    </svg>
                </button>`,
                
            nextArrow:
                `<button type="button" class="slick-next">
                            <svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61">
                                <g id="science_arrow_right" transform="translate(-1262 -2.254)">
                                <circle id="Эллипс_64" data-name="Эллипс 64" cx="30.5" cy="30.5" r="30.5" transform="translate(1262 2.254)" fill="#306"/>
                                <g id="arrow" transform="translate(1287.335 16.324)">
                                    <path id="Контур_1" data-name="Контур 1" d="M127.374,15.5,113.934.269a.739.739,0,0,0-1.14,0,1,1,0,0,0,0,1.292L125.66,16.142,112.793,30.723a1,1,0,0,0,0,1.292.767.767,0,0,0,.567.271.744.744,0,0,0,.567-.271l13.44-15.23A1,1,0,0,0,127.374,15.5Z" transform="translate(-112.556 0)" stroke="#fff" stroke-width="3"/>
                                </g>
                                </g>
                            </svg>
                        </button>`,
    
            dots: false,
            speed: 1000,
            easing: "ease",
            autoplay: false,
            autoplaySpeed: 4000,
            asNavFor: ".science_slider_secondary",
            infinite: false
        
        });
    
        $(".science_slider_secondary").slick(
        {
            prevArrow:
                `<button type="button" class="slick-prev">
                    <svg id="science_arrow_left" xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61">
                        <circle id="Эллипс_64" data-name="Эллипс 64" cx="30.5" cy="30.5" r="30.5" fill="#306"/>
                        <g id="arrow" transform="translate(20.614 14.07)">
                        <path id="Контур_1" data-name="Контур 1" d="M112.788,15.5,126.228.269a.739.739,0,0,1,1.14,0,1,1,0,0,1,0,1.292L114.5,16.142l12.867,14.581a1,1,0,0,1,0,1.292.767.767,0,0,1-.567.271.744.744,0,0,1-.567-.271l-13.44-15.23A1,1,0,0,1,112.788,15.5Z" transform="translate(-112.556 0)" fill="none" stroke="#fff" stroke-width="3"/>
                        </g>
                    </svg>
                </button>`,
                
            nextArrow:
                `<button type="button" class="slick-next">
                            <svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61">
                                <g id="science_arrow_right" transform="translate(-1262 -2.254)">
                                <circle id="Эллипс_64" data-name="Эллипс 64" cx="30.5" cy="30.5" r="30.5" transform="translate(1262 2.254)" fill="#306"/>
                                <g id="arrow" transform="translate(1287.335 16.324)">
                                    <path id="Контур_1" data-name="Контур 1" d="M127.374,15.5,113.934.269a.739.739,0,0,0-1.14,0,1,1,0,0,0,0,1.292L125.66,16.142,112.793,30.723a1,1,0,0,0,0,1.292.767.767,0,0,0,.567.271.744.744,0,0,0,.567-.271l13.44-15.23A1,1,0,0,0,127.374,15.5Z" transform="translate(-112.556 0)" stroke="#fff" stroke-width="3"/>
                                </g>
                                </g>
                            </svg>
                        </button>`,
    
            speed: 1000,
            easing: "ease",
            autoplay: false,
            asNavFor: ".science_slider_main",
            
            dots: true,
            slidesToShow: 3,
            vertical: true,
            verticalSwiping: true,
            focusOnSelect: true,
            infinite: false,
            arrows: false,

            responsive: [

                {
                    breakpoint: 1000,
                    settings: {

                        vertical: false,
                        verticalSwiping: false

                    }
                }

            ]
        });

}
