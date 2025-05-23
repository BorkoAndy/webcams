	<?echo 
	"<div id='weather-font-icon'></div><div id='now_temperature'></div>"
	?>
	<script>
    

    const lat = 47.650978465054656;
    const lon = 12.321479199751838;
    
    const code_font = {
	"0":{
		"day":{
			"description":"Sonnig",
			"class":"wi-day-sunny"
		},
		"night":{
			"description":"Klar",
			"class":"wi-night-clear"
		}
	},
	"1":{
		"day":{
			"description":"Hauptsächlich sonnig",
			"class":"wi-day-sunny-overcast"
		},
		"night":{
			"description":"Hauptsächlich klar",
			"class":"wi-night-alt-partly-cloudy"
		}
	},
	"2":{
		"day":{
			"description":"Teilweise bewölkt",
			"class":"wi-day-cloudy"
		},
		"night":{
			"description":"Teilweise bewölkt",
			"class":"wi-night-alt-cloudy"
		}
	},
	"3":{
		"day":{
			"description":"Wolkig",
			"class":"wi-cloudy"
		},
		"night":{
			"description":"Wolkig",
			"class":"wi-cloudy"
		}
	},
	"45":{
		"day":{
			"description":"Nebelig",
			"class":"wi-day-fog"
		},
		"night":{
			"description":"Nebelig",
			"class":"wi-night-fog"
		}
	},
	"48":{
		"day":{
			"description":"Raureifnebel",
			"class":"wi-fog"
		},
		"night":{
			"description":"Raureifnebel",
			"class":"wi-fog"
		}
	},
	"51":{
		"day":{
			"description":"Leichter Nieselregen",
			"class":"wi-sleet"
		},
		"night":{
			"description":"Leichter Nieselregen",
			"class":"wi-sleet"
		}
	},
	"53":{
		"day":{
			"description":"Nieselregen",
			"class":"wi-rain"
		},
		"night":{
			"description":"Nieselregen",
			"class":"wi-rain"
		}
	},
	"55":{
		"day":{
			"description":"Starker Nieselregen",
			"class":"wi-rain-wind"
		},
		"night":{
			"description":"Starker Nieselregen",
			"class":"wi-rain-wind"
		}
	},
	"56":{
		"day":{
			"description":"Leichter eiskalter Nieselregen",
			"class":"wi-rain-mix"
		},
		"night":{
			"description":"Leichter eiskalter Nieselregen",
			"class":"wi-rain-mix"
		}
	},
	"57":{
		"day":{
			"description":"Eisiger Nieselregen",
			"class":"wi-rain-mix"
		},
		"night":{
			"description":"Eisiger Nieselregen",
			"class":"wi-rain-mix"
		}
	},
	"61":{
		"day":{
			"description":"Leichter Regen",
			"class":"wi-day-rain"
		},
		"night":{
			"description":"Leichter Regen",
			"class":"wi-night-alt-rain"
		}
	},
	"63":{
		"day":{
			"description":"Regen",
			"class":"wi-day-rain"
		},
		"night":{
			"description":"Regen",
			"class":"wi-night-alt-rain-wind"
		}
	},
	"65":{
		"day":{
			"description":"Starker Regen",
			"class":"wi-day-rain"
		},
		"night":{
			"description":"Starker Regen",
			"class":"wi-night-alt-rain-wind"
		}
	},
	"66":{
		"day":{
			"description":"Leichter Eisregen",
			"class":"http://openweathermap.org/img/wn/10d@2x.png"
		},
		"night":{
			"description":"Leichter Eisregen",
			"class":"http://openweathermap.org/img/wn/10n@2x.png"
		}
	},
	"67":{
		"day":{
			"description":"Eisiger Regen",
			"class":"http://openweathermap.org/img/wn/10d@2x.png"
		},
		"night":{
			"description":"Eisiger Regen",
			"class":"http://openweathermap.org/img/wn/10n@2x.png"
		}
	},
	"71":{
		"day":{
			"description":"Leichter Schnee",
			"class":"wi-day-snow"
		},
		"night":{
			"description":"Leichter Schnee",
			"class":"wi-night-snow"
		}
	},
	"73":{
		"day":{
			"description":"Schnee",
			"class":"wi-day-snow"
		},
		"night":{
			"description":"Schnee",
			"class":"wi-night-snow"
		}
	},
	"75":{
		"day":{
			"description":"Starker Schneefall",
			"class":"wi-day-snow"
		},
		"night":{
			"description":"Starker Schneefall",
			"class":"wi-night-snow"
		}
	},
	"77":{
		"day":{
			"description":"Schneekörner",
			"class":"wi-day-snow"
		},
		"night":{
			"description":"Schneekörner",
			"class":"wi-night-snow"
		}
	},
	"80":{
		"day":{
			"description":"Leichte Schauer",
			"class":"wi-day-snow"
		},
		"night":{
			"description":"Leichte Schauer",
			"class":"wi-night-snow"
		}
	},
	"81":{
		"day":{
			"description":"Schauer",
			"class":"wi-showers"
		},
		"night":{
			"description":"Schauer",
			"class":"wi-showers"
		}
	},
	"82":{
		"day":{
			"description":"Starke Schauer",
			"class":"wi-showers"
		},
		"night":{
			"description":"Starke Schauer",
			"class":"wi-showers"
		}
	},
	"85":{
		"day":{
			"description":"Leichte Schneeschauer",
			"class":"wi-snow"
		},
		"night":{
			"description":"Leichte Schneeschauer",
			"class":"wi-snow"
		}
	},
	"86":{
		"day":{
			"description":"Schneeschauer",
			"class":"wi-snow"
		},
		"night":{
			"description":"Schneeschauer",
			"class":"wi-snow"
		}
	},
	"95":{
		"day":{
			"description":"Gewitter",
			"class":"wi-day-thunderstorm"
		},
		"night":{
			"description":"Gewitter",
			"class":"wi-thunderstorm"
		}
	},
	"96":{
		"day":{
			"description":"Leichte Gewitter mit Hagel",
			"class":"wi-day-thunderstorm"
		},
		"night":{
			"description":"Leichte Gewitter mit Hagel",
			"class":"wi-thunderstorm"
		}
	},
	"99":{
		"day":{
			"description":"Gewitter mit Hagel",
			"class":"wi-day-thunderstorm"
		},
		"night":{
			"description":"Gewitter mit Hagel",
			"class":"wi-thunderstorm"
		}
	}
}
document.addEventListener('DOMContentLoaded', get_weather_data);

function get_weather_data() {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,is_day,weather_code,cloud_cover&hourly=temperature_2m,weather_code&daily=weather_code&timezone=Europe%2FBerlin`)
    .then(result => result.json())
    .then(data =>{
        weather_data = data;
        console.log(data.current.is_day);
        set_now(data.current);
    })
}
function set_now(current){ 
	is_day = (current.is_day == 1) ? "day" : "night";	
	let elem = document.getElementById("weather-font-icon");
	
	elem.innerHTML = '<i class="wi '+code_font[current.weather_code][is_day].class+'"></i>'
    document.getElementById("now_temperature").innerHTML = Math.round(current.temperature_2m) + " °C";
}

</script>

