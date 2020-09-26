export default function calendarInit () {


    const calendarEl = document.querySelector('.events_calendar');

    let calendar = new FullCalendar.Calendar(calendarEl,
    {
      initialView: 'dayGridMonth',
      locale: "ru"
    }); 
    
    calendar.render();

    const btnPrev = document.querySelector(".section_events .events_calendar .fc-prev-button");
    const btnNext = document.querySelector(".section_events .events_calendar .fc-next-button");
    const calendarHeader = document.querySelector(".section_events .events_calendar .fc-header-toolbar");

    function checkMonth(){
      
      const nowMonth = calendar.getDate().getMonth();
      console.log(nowMonth);

      if (nowMonth === 11 || (nowMonth >= 0 && nowMonth <= 1))
        calendarHeader.style.backgroundImage = "url('gif/events/calendar/winter.gif')";
      else if (nowMonth >= 2 && nowMonth <= 4)
        calendarHeader.style.backgroundImage = "url('gif/events/calendar/spring.gif')";
      else if (nowMonth >= 5 && nowMonth <= 7)
        calendarHeader.style.backgroundImage = "url('gif/events/calendar/summer.gif')";
      else
        calendarHeader.style.backgroundImage = "url('gif/events/calendar/autumn.gif')";

    }

    checkMonth();

    btnPrev.onclick = checkMonth;
    btnNext.onclick = checkMonth;

};