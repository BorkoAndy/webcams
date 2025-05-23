
    document.addEventListener('DOMContentLoaded', get_weather_data);



// example "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"


const weekDays = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    const codes = {
	"0":{
		"day":{
			"description":"Sonnig",
			"image":"A.png"
		},
		"night":{
			"description":"Klar",
			"image":"-.png"
		}
	},
	"1":{
		"day":{
			"description":"Hauptsächlich sonnig",
			"image":"B.png"
		},
		"night":{
			"description":"Hauptsächlich klar",
			"image":"halbmond.png"
		}
	},
	"2":{
		"day":{
			"description":"Teilweise bewölkt",
			"image":"C.png"
		},
		"night":{
			"description":"Teilweise bewölkt",
			"image":"bewolkte-nacht.png"
		}
	},
	"3":{
		"day":{
			"description":"Wolkig",
			"image":"E.png"
		},
		"night":{
			"description":"Wolkig",
			"image":"E.png"
		}
	},
	"45":{
		"day":{
			"description":"Nebelig",
			"image":"T.png"
		},
		"night":{
			"description":"Nebelig",
			"image":"T.png"
		}
	},
	"48":{
		"day":{
			"description":"Raureifnebel",
			"image":"T.png"
		},
		"night":{
			"description":"Raureifnebel",
			"image":"T.png"
		}
	},
	"51":{
		"day":{
			"description":"Leichter Nieselregen",
			"image":"R.png"
		},
		"night":{
			"description":"Leichter Nieselregen",
			"image":"R.png"
		}
	},
	"53":{
		"day":{
			"description":"Nieselregen",
			"image":"T.png"
		},
		"night":{
			"description":"Nieselregen",
			"image":"T.png"
		}
	},
	"55":{
		"day":{
			"description":"Starker Nieselregen",
			"image":"R.png"
		},
		"night":{
			"description":"Starker Nieselregen",
			"image":"R.png"
		}
	},
	"56":{
		"day":{
			"description":"Leichter eiskalter Nieselregen",
			"image":"R.png"
		},
		"night":{
			"description":"Leichter eiskalter Nieselregen",
			"image":"R.png"
		}
	},
	"57":{
		"day":{
			"description":"Eisiger Nieselregen",
			"image":"R.png"
		},
		"night":{
			"description":"Eisiger Nieselregen",
			"image":"R.png"
		}
	},
	"61":{
		"day":{
			"description":"Leichter Regen",
			"image":"J.png"
		},
		"night":{
			"description":"Leichter Regen",
			"image":"J.png "
		}
	},
	"63":{
		"day":{
			"description":"Regen",
			"image":"H.png"
		},
		"night":{
			"description":"Regen",
			"image":"H.png "
		}
	},
	"65":{
		"day":{
			"description":"Starker Regen",
			"image":"I.png"
		},
		"night":{
			"description":"Starker Regen",
			"image":"I.png"
		}
	},
	"66":{
		"day":{
			"description":"Leichter Eisregen",
			"image":"http://openweathermap.org/img/wn/10d@2x.png"
		},
		"night":{
			"description":"Leichter Eisregen",
			"image":"http://openweathermap.org/img/wn/10n@2x.png"
		}
	},
	"67":{
		"day":{
			"description":"Eisiger Regen",
			"image":"http://openweathermap.org/img/wn/10d@2x.png"
		},
		"night":{
			"description":"Eisiger Regen",
			"image":"http://openweathermap.org/img/wn/10n@2x.png"
		}
	},
	"71":{
		"day":{
			"description":"Leichter Schnee",
			"image":"N.png "
		},
		"night":{
			"description":"Leichter Schnee",
			"image":"N.png "
		}
	},
	"73":{
		"day":{
			"description":"Schnee",
			"image":"O.png "
		},
		"night":{
			"description":"Schnee",
			"image":"O.png "
		}
	},
	"75":{
		"day":{
			"description":"Starker Schneefall",
			"image":"P.png "
		},
		"night":{
			"description":"Starker Schneefall",
			"image":"P.png "
		}
	},
	"77":{
		"day":{
			"description":"Schneekörner",
			"image":"P.png"
		},
		"night":{
			"description":"Schneekörner",
			"image":"P.png"
		}
	},
	"80":{
		"day":{
			"description":"Leichte Schauer",
			"image":"J.png"
		},
		"night":{
			"description":"Leichte Schauer",
			"image":"J.png"
		}
	},
	"81":{
		"day":{
			"description":"Schauer",
			"image":"H.png"
		},
		"night":{
			"description":"Schauer",
			"image":"H.png"
		}
	},
	"82":{
		"day":{
			"description":"Starke Schauer",
			"image":"I.png"
		},
		"night":{
			"description":"Starke Schauer",
			"image":"I.png"
		}
	},
	"85":{
		"day":{
			"description":"Leichte Schneeschauer",
			"image":"N.png"
		},
		"night":{
			"description":"Leichte Schneeschauer",
			"image":"N.png"
		}
	},
	"86":{
		"day":{
			"description":"Schneeschauer",
			"image":"O.png"
		},
		"night":{
			"description":"Schneeschauer",
			"image":"O.png"
		}
	},
	"95":{
		"day":{
			"description":"Gewitter",
			"image":"U.png"
		},
		"night":{
			"description":"Gewitter",
			"image":"V.png"
		}
	},
	"96":{
		"day":{
			"description":"Leichte Gewitter mit Hagel",
			"image":"V.png"
		},
		"night":{
			"description":"Leichte Gewitter mit Hagel",
			"image":"V.png"
		}
	},
	"99":{
		"day":{
			"description":"Gewitter mit Hagel",
			"image":"Z.png"
		},
		"night":{
			"description":"Gewitter mit Hagel",
			"image":"X.png"
		}
	}
}

// 47.650964010194805, 12.321436283690051 Bellevue-walchsee

const latitude = 47.650964010194805;
const longitude = 12.321436283690051;

const days = ["today", "today+1", "today+2", "today+3"]
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

