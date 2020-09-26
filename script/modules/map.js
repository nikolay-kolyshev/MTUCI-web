export default function mapInit(){

    const token = "pk.eyJ1IjoibmtvbHlzaGV2IiwiYSI6ImNrY3o4cnVpZzBoaGMyem43NG1uaGt6cTYifQ.AHrBtWGIoCxGk77EtrXAbg";

    const btnMain = document.querySelector(".section_map .map_nav_main");
    const btnSecond = document.querySelector(".section_map .map_nav_second");

    const coordinatesUniversityMain = [37.7134895324707, 55.75509767656657];
    const coordinatesUniversitySecond = [37.48254060745239, 55.784350657393835];

    mapboxgl.accessToken = token;


    let map = new mapboxgl.Map({
        container: 'map', // html-элемент карты
        style: "mapbox://styles/nkolyshev/ckdvcftob1vwu19o1l2s9s3cv", // стили
        center: [coordinatesUniversityMain[0], coordinatesUniversityMain[1]], // координаты
        zoom: 17.41, // приближение
        pitch: 100, // наклон карты
        bearing: 70, // поворот карты
    });


    function animateDistance(center) {
         
        let animationOptions = {
            
        };
         
        animationOptions.center = center;
         
        map.flyTo(animationOptions);
        map.getSource('center').setData({
            'type': 'Point',
            'coordinates': center
        });
        map.setLayoutProperty(
            'center',
            'text-field',
            'Center: [' +
            center[0].toFixed(1) +
            ', ' +
            center[1].toFixed(1) +
            ']'
        );
    }


    let nav = new mapboxgl.NavigationControl({
        showCompass: true,
        showZoom: true
    })

    map.addControl(nav, "bottom-right");


    let pointUniversityMain = {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                coordinatesUniversityMain[0],
                coordinatesUniversityMain[1]
              ]
            }
          }
        ]
    };

    // let pointMetroMain = {
    //     "type": "FeatureCollection",
    //     "features": [
    //       {
    //         "type": "Feature",
    //         "properties": {},
    //         "geometry": {
    //           "type": "Point",
    //           "coordinates": [
    //             37.71711554378271,
    //             55.752352236979675
    //           ]
    //         }
    //       }
    //     ]
    // };

    let pointUniversitySecond = {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                coordinatesUniversitySecond[0],
                coordinatesUniversitySecond[1]
              ]
            }
          }
        ]
    }

    pointUniversityMain.features.forEach(function(marker){

        let el = document.createElement('img');
        el.style.height = "70px";
        el.src = "../images/svg/map/marker.svg";

        new mapboxgl.Marker(
            {
                element: el,
            }
        )
          .setLngLat(marker.geometry.coordinates)
          .setPopup(new mapboxgl.Popup().setHTML("<h1>Основной корпус МТУСИ</h1>"))
          .addTo(map);

    });

    // pointMetroMain.features.forEach(function(marker){

    //     let el = document.createElement('img');
    //     el.style.height = "70px";
    //     el.src = "../images/svg/map/marker.svg";

    //     new mapboxgl.Marker(
    //         {
    //             element: el,
    //         }
    //     )
    //       .setLngLat(marker.geometry.coordinates)
    //       .setPopup(new mapboxgl.Popup().setHTML("<h1>Ближайшее метро</h1>"))
    //       .addTo(map);

    // });

    pointUniversitySecond.features.forEach(function(marker){

        let el = document.createElement('img');
        el.style.height = "70px";
        el.src = "../images/svg/map/marker.svg";

        new mapboxgl.Marker(
            {
                element: el,
            }
        )
          .setLngLat(marker.geometry.coordinates)
          .setPopup(new mapboxgl.Popup().setHTML("<h1>Второй корпус МТУСИ</h1>"))
          .addTo(map);

    });

    btnMain.addEventListener('click', function(){
        const $mapInfoMain = $(".section_map .map_info_main");
        const $mapInfoSecond = $(".section_map .map_info_second");
        $mapInfoSecond.slideUp(1000);
        $mapInfoMain.fadeIn(1000);
        animateDistance(coordinatesUniversityMain)

    });
    btnSecond.addEventListener('click', function(){
        const $mapInfoMain = $(".section_map .map_info_main");
        const $mapInfoSecond = $(".section_map .map_info_second");
        $mapInfoMain.slideUp(1000);
        $mapInfoSecond.fadeIn(1000);
        animateDistance(coordinatesUniversitySecond)
    });

}