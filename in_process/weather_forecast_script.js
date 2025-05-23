
    document.addEventListener('DOMContentLoaded', get_weather_data);



// example "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"

const days = ["today", "today+1", "today+2", "today+3"]
const weekDays = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
const codes = {} //Need to fetch from json

// 47.650964010194805, 12.321436283690051 Bellevue-walchsee

const latitude = 47.650964010194805;
const longitude = 12.321436283690051;


 //indexes = 7, 14, 20  +24
const daytimes = {
    "morning": 7, 
    "noon": 14, 
    "afternoon": 20
    // "evening": 23
}

let weather_data;
let is_day = 'day';


function get_weather_data() {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day,weather_code,cloud_cover&hourly=temperature_2m,weather_code&daily=weather_code&timezone=Europe%2FBerlin`)
    .then(result => result.json())
    .then(data =>{
        weather_data = data;   

        for (let day of days){
            newdate = new Date(weather_data.daily.time[days.indexOf(day)]);
			// let s_description = document.getElementById(`wt-s-${day}`).getElementsByClassName("s-description");
            let description = document.getElementById(`wt-${day}`).getElementsByClassName("description");
            description[0].innerHTML += format_date(weather_data.daily.time[days.indexOf(day)]) + " " + weekDays[newdate.getDay()]
			// s_description[0].innerHTML += format_date(weather_data.daily.time[days.indexOf(day)]) + " " + weekDays[newdate.getDay()]
            
                set_forecast(day, data.hourly)                       
        }
    })
}

function set_forecast(day, data) {
    for(let daytime of Object.keys(daytimes)){

    let hourly_index = daytimes[daytime] + 24 * days.indexOf(day);

    let img_temp = document.getElementById(`wt-${day}`).getElementsByClassName(daytime)[0].innerHTML = 
        '<div class="d-flex">'+
            '<div>'+
            '<img src="files/weather_icons/png/'+ codes[data.weather_code[hourly_index]][is_day].image+'">' + "<p>"+ 
            Math.round(data.temperature_2m[hourly_index]) +" °C</p>" +
            '</div>'+
            '<div>'+
            codes[data.weather_code[hourly_index]][is_day].description+
            '</div>'+
        '</div>';       
}}

function format_date(date) {
    date_array = date.split("-");
    return date_array[2]+"."+date_array[1]+"."+date_array[0];
}

