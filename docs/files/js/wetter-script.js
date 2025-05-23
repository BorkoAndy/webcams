document.addEventListener('DOMContentLoaded', get_weather_all_points);

// when the codes in json file are


// example "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
//Coords can be taken here: https://www.meteomatics.com/en/weather-widget/


//Codes cannot be uploaded to the CMS because of json format
let codes = 

//Weather icons
{
	"0":{
		"day":{
			"description":"Sonnig",
			"image":"wetter/icons/static/sunny_static.svg",
            "image_anim":"wetter/icons/animated/sunny_anim.svg"
		},
		"night":{
			"description":"Klar",
			"image":"wetter/icons/static/clear_static.svg",
            "image_anim":"wetter/icons/animated/clear_night_anim.svg"
		}
	},
	"1":{
		"day":{
			"description":"Hauptsächlich sonnig",
			"image":"wetter/icons/static/mostly_sunny_static.svg",
            "image_anim":"wetter/icons/animated/mainly_sunny_anim.svg"
		},
		"night":{
			"description":"Hauptsächlich klar",
			"image":"wetter/icons/static/mostly_clear_night_static.svg",
            "image_anim":"wetter/icons/animated/mostly_clear_night_anim.svg"
		}
	},
	"2":{
		"day":{
			"description":"Teilweise bewölkt",
			"image":"wetter/icons/static/cloudy_day_static.svg",
            "image_anim":"wetter/icons/animated/cloudy_day_anim.svg"
		},
		"night":{
			"description":"Teilweise bewölkt",
			"image":"wetter/icons/static/cloudy_night_static.svg",
            "image_anim":"wetter/icons/animated/cloudy_night_anim.svg"
		}
	},
	"3":{
		"day":{
			"description":"Wolkig",
			"image":"wetter/icons/static/cloudy_static.svg",
            "image_anim":"wetter/icons/animated/clouds_anim.svg"
		},
		"night":{
			"description":"Wolkig",
			"image":"wetter/icons/static/cloudy_static.svg",
            "image_anim":"wetter/icons/animated/clouds_anim.svg"
		}
	},
	"45":{
		"day":{
			"description":"Nebelig",
			"image":"wetter/icons/static/foggy_static.svg",
            "image_anim":"wetter/icons/animated/foggy_anim.svg"
		},
		"night":{
			"description":"Nebelig",
			"image":"wetter/icons/static/foggy_static.svg",
            "image_anim":"wetter/icons/animated/foggy_anim.svg"
		}
	},
	"48":{
		"day":{
			"description":"Raureifnebel",
			"image":"wetter/icons/static/rime_fog_static.svg",
            "image_anim":"wetter/icons/animated/rime_fog_anim.svg"
		},
		"night":{
			"description":"Raureifnebel",
			"image":"wetter/icons/static/rime_fog_static.svg",
            "image_anim":"wetter/icons/animated/rime_fog_anim.svg"
		}
	},
	"51":{
		"day":{
			"description":"Leichter Nieselregen",
			"image":"wetter/icons/static/light_drizzle_static.svg",
            "image_anim":"wetter/icons/animated/light_drizzle_anim.svg"
		},
		"night":{
			"description":"Leichter Nieselregen",
			"image":"wetter/icons/static/light_drizzle_static.svg",
            "image_anim":"wetter/icons/animated/light_drizzle_anim.svg"
		}
	},
	"53":{
		"day":{
			"description":"Nieselregen",
			"image":"wetter/icons/static/drizzle_static.svg",
            "image_anim":"wetter/icons/animated/drizzle_anim.svg"
		},
		"night":{
			"description":"Nieselregen",
			"image":"wetter/icons/static/drizzle_static.svg",
            "image_anim":"wetter/icons/animated/drizzle_anim.svg"
		}
	},
	"55":{
		"day":{
			"description":"Starker Nieselregen",
			"image":"wetter/icons/static/heavy_drizzle_static.svg",
            "image_anim":"wetter/icons/animated/heavy_drizzle_anim.svg"
		},
		"night":{
			"description":"Starker Nieselregen",
			"image":"wetter/icons/static/heavy_drizzle_static.svg",
            "image_anim":"wetter/icons/animated/heavy_drizzle_anim.svg"
		}
	},
	"56":{
		"day":{
			"description":"Leichter eiskalter Nieselregen",
			"image":"wetter/icons/static/light_freezing_drizzle_static.svg",
            "image_anim":"wetter/icons/animated/light_freezing_drizzle_anim.svg"
		},
		"night":{
			"description":"Leichter eiskalter Nieselregen",
			"image":"wetter/icons/static/light_freezing_drizzle_static.svg",
            "image_anim":"wetter/icons/animated/light_freezing_drizzle_anim.svg"
		}
	},
	"57":{
		"day":{
			"description":"Eisiger Nieselregen",
			"image":"wetter/icons/static/freezing_drizzle_static.svg",
            "image_anim":"wetter/icons/animated/freezing_drizzle_anim.svg"
		},
		"night":{
			"description":"Eisiger Nieselregen",
			"image":"wetter/icons/static/freezing_drizzle_static.svg",
            "image_anim":"wetter/icons/animated/freezing_drizzle_anim.svg"
		}
	},
	"61":{
		"day":{
			"description":"Leichter Regen",
			"image":"wetter/icons/static/light_rain_static.svg",
            "image_anim":"wetter/icons/animated/light_rain_anim.svg"
		},
		"night":{
			"description":"Leichter Regen",
			"image":"wetter/icons/static/light_rain_static.svg",
            "image_anim":"wetter/icons/animated/light_rain_anim.svg"
		}
	},
	"63":{
		"day":{
			"description":"Regen",
			"image":"wetter/icons/static/rain_static.svg",
            "image_anim":"wetter/icons/animated/rain_anim.svg"
		},
		"night":{
			"description":"Regen",
			"image":"wetter/icons/static/rain_static.svg",
            "image_anim":"wetter/icons/animated/rain_anim.svg"
		}
	},
	"65":{
		"day":{
			"description":"Starker Regen",
			"image":"wetter/icons/static/heavy_rain_static.svg",
            "image_anim":"wetter/icons/animated/heavy_rain_anim.svg"
		},
		"night":{
			"description":"Starker Regen",
			"image":"wetter/icons/static/heavy_rain_static.svg",
            "image_anim":"wetter/icons/animated/heavy_rain_anim.svg"
		}
	},
	"66":{
		"day":{
			"description":"Leichter Eisregen",
			"image":"wetter/icons/static/light_freezing_rain_static.svg",
            "image_anim":"wetter/icons/animated/light_freezing_rain_anim.svg"
		},
		"night":{
			"description":"Leichter Eisregen",
			"image":"wetter/icons/static/light_freezing_rain_static.svg",
            "image_anim":"wetter/icons/animated/light_freezing_rain_anim.svg"
		}
	},
	"67":{
		"day":{
			"description":"Eisiger Regen",
			"image":"wetter/icons/static/freezing_rain_static.svg",
            "image_anim":"wetter/icons/animated/freezing_rain_anim.svg"
		},
		"night":{
			"description":"Eisiger Regen",
			"image":"wetter/icons/static/freezing_rain_static.svg",
            "image_anim":"wetter/icons/animated/freezing_rain_anim.svg"
		}
	},
	"71":{
		"day":{
			"description":"Leichter Schnee",
			"image":"wetter/icons/static/light_snow_static.svg",
            "image_anim":"wetter/icons/animated/light_snow_anim.svg"
		},
		"night":{
			"description":"Leichter Schnee",
			"image":"wetter/icons/static/light_snow_static.svg",
            "image_anim":"wetter/icons/animated/light_snow_anim.svg"
		}
	},
	"73":{
		"day":{
			"description":"Schnee",
			"image":"wetter/icons/static/snow_static.svg",
            "image_anim":"wetter/icons/animated/snow_anim.svg"
		},
		"night":{
			"description":"Schnee",
			"image":"wetter/icons/static/snow_static.svg",
            "image_anim":"wetter/icons/animated/snow_anim.svg"
		}
	},
	"75":{
		"day":{
			"description":"Starker Schneefall",
			"image":"wetter/icons/static/heavy_snow_static.svg",
            "image_anim":"wetter/icons/animated/HeavySnow_anim.svg"
		},
		"night":{
			"description":"Starker Schneefall",
			"image":"wetter/icons/static/heavy_snow_static.svg",
            "image_anim":"wetter/icons/animated/HeavySnow_anim.svg"
		}
	},
	"77":{
		"day":{
			"description":"Schneekörner",
			"image":"wetter/icons/static/snow_grains_static.svg",
            "image_anim":"wetter/icons/animated/snow_grains_anim.svg"
		},
		"night":{
			"description":"Schneekörner",
			"image":"wetter/icons/static/snow_grains_static.svg",
            "image_anim":"wetter/icons/animated/snow_grains_anim.svg"
		}
	},
	"80":{
		"day":{
			"description":"Leichte Schauer",
			"image":"wetter/icons/static/light_drizzle_static.svg",
            "image_anim":"wetter/icons/animated/light_drizzle_anim.svg"
		},
		"night":{
			"description":"Leichte Schauer",
			"image":"wetter/icons/static/light_drizzle_static.svg",
            "image_anim":"wetter/icons/animated/light_drizzle_anim.svg"
		}
	},
	"81":{
		"day":{
			"description":"Schauer",
			"image":"wetter/icons/static/drizzle_static.svg",
            "image_anim":"wetter/icons/animated/drizzle_anim.svg"
		},
		"night":{
			"description":"Schauer",
			"image":"wetter/icons/static/drizzle_static.svg",
            "image_anim":"wetter/icons/animated/drizzle_anim.svg"
		}
	},
	"82":{
		"day":{
			"description":"Starke Schauer",
			"image":"wetter/icons/static/heavy_drizzle_static.svg",
            "image_anim":"wetter/icons/animated/heavy_drizzle_anim.svg"
		},
		"night":{
			"description":"Starke Schauer",
			"image":"wetter/icons/static/heavy_drizzle_static.svg",
            "image_anim":"wetter/icons/animated/heavy_drizzle_anim.svg"
		}
	},
	"85":{
		"day":{
			"description":"Leichte Schneeschauer",
			"image":"wetter/icons/static/light_snow_static.svg",
            "image_anim":"wetter/icons/animated/light_snow_anim.svg"
		},
		"night":{
			"description":"Leichte Schneeschauer",
			"image":"wetter/icons/static/light_snow_static.svg",
            "image_anim":"wetter/icons/animated/light_snow_anim.svg"
		}
	},
	"86":{
		"day":{
			"description":"Schneeschauer",
			"image":"wetter/icons/static/snow_static.svg",
            "image_anim":"wetter/icons/animated/snow_anim.svg"
		},
		"night":{
			"description":"Schneeschauer",
			"image":"wetter/icons/static/snow_static.svg",
            "image_anim":"wetter/icons/animated/snow_anim.svg"
		}
	},
	"95":{
		"day":{
			"description":"Gewitter",
			"image":"wetter/icons/static/thunder_static.svg",
            "image_anim":"wetter/icons/animated/thunder_anim.svg"
		},
		"night":{
			"description":"Gewitter",
			"image":"wetter/icons/static/thunder_static.svg",
            "image_anim":"wetter/icons/animated/thunder_anim.svg"
		}
	},
	"96":{
		"day":{
			"description":"Leichte Gewitter mit Hagel",
			"image":"wetter/icons/static/light_thunder_hail_static.svg",
            "image_anim":"wetter/icons/animated/light_thunder_hail_anim.svg.png"
		},
		"night":{
			"description":"Leichte Gewitter mit Hagel",
			"image":"wetter/icons/static/light_thunder_hail_static.svg",
            "image_anim":"wetter/icons/animated/light_thunder_hail_anim.svg.png"
		}
	},
	"99":{
		"day":{
			"description":"Gewitter mit Hagel",
			"image":"wetter/icons/static/heavy_thunder_hail_static.svg",
            "image_anim":"wetter/icons/heavy_thunder_hail_anim.png"
		},
		"night":{
			"description":"Gewitter mit Hagel",
			"image":"wetter/icons/static/heavy_thunder_hail_static.svg",
            "image_anim":"wetter/icons/heavy_thunder_hail_anim.png"
		}
	}
}

function get_weather_all_points () {
	let all_points = document.getElementsByClassName("now-container");
	
	for (let point of all_points) {
		get_weather_data(point);
	}
}
const days = ["today", "today+1", "today+2", "today+3", "today+4"]
 //indexes = 9, 12, 16, 24  +24
const daytimes = {
    "morning": 8, 
    "noon": 12, 
    "afternoon": 16,
    "evening": 23
}

let weather_data;
let is_day = 'day';


function get_weather_data(elem) {
	let latitude = elem.getAttribute("lat");
	let longitude = elem.getAttribute("lon");
	
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day,weather_code,cloud_cover&hourly=temperature_2m,weather_code&daily=weather_code&timezone=Europe%2FBerlin`)
    .then(result => result.json())
    .then(data =>{
        weather_data = data;
        // console.log(data);
        set_now(data.current, elem);

        // for (let day of days){
        //     for(let daytime of Object.keys(daytimes)){
        //         set_forecast(day, daytime, data.hourly)
        //     }            
        // }
    })
}

	// document.getElementById("now_weather_icon").src = codes[current.weather_code][is_day].image;
 //   document.getElementById("now_weather_description").innerHTML = codes[current.weather_code][is_day].description;
 //   document.getElementById("now_temperature").innerHTML = Math.round(current.temperature_2m) + " °C";

function set_now(current, elem){ 
    if (!current.is_day) is_day = 'night';
	// console.log(elem.querySelector("#now_weather_icon"));
	elem.querySelector("#now_weather_icon").setAttribute("src", codes[current.weather_code][is_day].image);
	elem.querySelector("#now_weather_description").innerHTML = codes[current.weather_code][is_day].description;
	elem.querySelector("#now_temperature").innerHTML = Math.round(current.temperature_2m) + " °C";
   
}

function set_forecast(day, daytime, data) {
    document.getElementById(`${day}_header`).innerHTML = format_date(weather_data.daily.time[days.indexOf(day)]);
    
    let hourly_index = daytimes[daytime] + 24 * days.indexOf(day);
    document.getElementById(`${day}_${daytime}_weather_icon`).src = codes[data.weather_code[hourly_index]][is_day].image;
    document.getElementById(`${day}_${daytime}_weather_description`).innerHTML = codes[data.weather_code[hourly_index]][is_day].description;
    document.getElementById(`${day}_${daytime}_temperature`).innerHTML = Math.round(data.temperature_2m[hourly_index]) + " °C";
}

function format_date(date) {
    date_array = date.split("-");
    return date_array[2]+"."+date_array[1]+"."+date_array[0];
}
