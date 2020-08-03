export default class CircleIcon {

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