const hour = document.getElementById("l_horloge_hours"), minute = document.getElementById('l_horloge_minutes'), second = document.getElementById('l_horloge_seconds');

const l_horloge = () => {
    let date = new Date()
    let hh = date.getHours() * 30,
        mm = date.getMinutes() * 6,
        ss = date.getSeconds() * 6

    // rotation of the hand elements
    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    minute.style.transform = `rotateZ(${mm}deg)`;
    second.style.transform = `rotateZ(${ss}deg)`;

}

setInterval(l_horloge, 1000); //1000 ns = 1s

const textHour = document.getElementById('text_hour'),
    textMinute = document.getElementById('text_minute'),
    dateDay = document.getElementById('date_dy'),
    dateDate = document.getElementById('date_dd')
dateMonth = document.getElementById('date_mm'),
    dateYear = document.getElementById('date_yy');

const l_horloge_text = () => {
    let date = new Date();
    let hh = date.getHours(),
        mm = date.getMinutes(),
        day = date.getDay(),
        dt = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear();


    // showing the accurate time, showing zero before single digit hours
    textHour.innerHTML = `${hh}`;
    textMinute.innerHTML = `${mm}`;
    if (hh < 10) {
        hh = `0${hh}`;
    }

    if (mm < 10) {
        mm = `0${mm}`;
    }

    // hh = (hh < 10) ? "0" + hh : hh;
    // mm = (mm < 10) ? '0' + mm : mm;

    // showing the dd/mm/yy
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "Novermber",
        "December"
    ];
    dateDay.innerHTML = `${days[day]}`;
    dateDate.innerHTML = dt;
    dateMonth.innerHTML = `${months[month]}`;
    dateYear.innerHTML = year;
}

setInterval(l_horloge_text, 1000); //1000 ns = 1s



/*
    about changing from 24h system to 12h system... using the if else to check when to change from am to pm. greater than 12 change from current to next. if current was pm change to am - 'the next one'.
    

    there is also detecting the 0000h. to convert is precisely to 12:00AM. 

    there is a bug when it comes to 
*/


