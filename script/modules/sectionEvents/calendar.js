export default function calendarInit () {

    const calendarEl = document.querySelector('.events_calendar');

    let calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      locale: "ru"
    }); 
    
    calendar.render();

};