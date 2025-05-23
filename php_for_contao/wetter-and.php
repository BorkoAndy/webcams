 
<style>
        table{
            width: 100%;
            background-color: #795F0C;
        }
        .small_res{
            display: none;
        }
        .wt-header {
			width: 100%;
            background-color: #7f9aa1;
            border: 3px white solid;
            color: #f2f2f2;            
            /* padding-right: 25px;
            padding-left: 25px; */
            text-align: left;
            text-transform: uppercase;
			flex-wrap: nowrap;
            
        }
        body {
            background-color: #f2f2f2;
        }
        tr:not(.wt-header){
            background-color: #f2f2f2; 
            color: #795F0C;
			flex-wrap: wrap;
        }
        
        .d-flex {
            display: flex;
            flex-direction: column;
        }
        .d-flex>div {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0px 10px 0px 10px;
        }
        .description {
            padding-left: 25px;
            color:#795F0C;
            font: 27px Source Serif Pro;;
        }
        .s-description{
            width: 100%;
        }
		.weather_detail,
		.wt-header{
			display: flex;
			justify-content: space-around;
			
		}
		.row{
			margin-bottom: 30px;
		}
        @media (max-width: 767px){
            .description {
                display: none;
            }
            .small_res{
                display: block;
            }
            .d-flex>div{
                display: flex;
                flex-direction: column;
            }
            table {
                background-color: #f2f2f2;
                width: 95%
            };
            
        }
    </style>
    
<div id="weather-table">
    <!-- <table>
        <tr class="wt-header">
            <td class="description" style="width: 40%; padding-left: 25px;">Tag</td>
            <td style="text-align: center;">VORMITTAG</td>
            <td style="text-align: center;">NACHMITTAG</td>
            <td style="text-align: center;">ABEND</td>
        </tr>
		<tr id="wt-s-today" class="small_res"><td class="s-description">Heute - </td>
		</tr>
        <tr id="wt-today">
            <td class="description">Heute - </td>
            <td class="morning">Hi<div></div></td>
            <td class="noon"><img src=""><p></p></td>
            <td class="afternoon"><img src=""><p></p></td>
        </tr>
		<tr id="wt-s-today+1" class="small_res"><td class="s-description">Morgen - </td></tr>
        <tr id="wt-today+1">
            <td class="description">Morgen - </td>
            <td class="morning"><img src=""><p></p></td>
            <td class="noon"><img src=""><p></p></td>
            <td class="afternoon"><img src=""><p></p></td>
        </tr>
		<tr id="wt-s-today+2" class="small_res"><td class="s-description"></td></tr>
        <tr id="wt-today+2">
            <td class="description"></td>
            <td class="morning"><img src=""><p></p></td>
            <td class="noon"><img src=""><p></p></td>
            <td class="afternoon"><img src=""><p></p></td>
        </tr>
		<tr id="wt-s-today+3" class="small_res"><td class="s-description"></td></tr>
        <tr id="wt-today+3">
            <td class="description"></td>
            <td class="morning"><img src=""><p></p></td>
            <td class="noon"><img src=""><p></p></td>
            <td class="afternoon"><img src=""><p></p></td>
        </tr>
    </table> -->
	 <div class="table">
        <div class="row wt-header">
            <!-- <div style="width: 40%; padding-left: 25px;">Tag</div> -->
            <div style="text-align: center;">VORMITTAG</div>
            <div style="text-align: center;">NACHMITTAG</div>
            <div style="text-align: center;">ABEND</div>
        </div>
        <div class="row" id="wt-today">
            <div class="description">Heute - </div>
			<div class="weather_detail">
				<div class="morning">Hi<div></div></div>
				<div class="noon"><img src=""><p></p></div>
				<div class="afternoon"><img src=""><p></p></div>
			</div>
        </div>
        <div class="row" id="wt-today+1">
            <div class="description">Morgen - </div>
           	<div class="weather_detail">
				<div class="morning">Hi<div></div></div>
				<div class="noon"><img src=""><p></p></div>
				<div class="afternoon"><img src=""><p></p></div>
			</div>
        </div>
        <div class="row" id="wt-today+2">
            <div class="description"></div>
            <div class="weather_detail">
				<div class="morning">Hi<div></div></div>
				<div class="noon"><img src=""><p></p></div>
				<div class="afternoon"><img src=""><p></p></div>
			</div>
        </div>
        <div class="row" id="wt-today+3">
            <div class="description"></div>
            <div class="weather_detail">
				<div class="morning">Hi<div></div></div>
				<div class="noon"><img src=""><p></p></div>
				<div class="afternoon"><img src=""><p></p></div>
			</div>
        </div>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', get_weather_data);



// example "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"


const weekDays = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    const codes = {
	"0":{
		"day":{
			"description":"Sonnig",
			"image":"zamg/png/A.png"
		},
		"night":{
			"description":"Klar",
			"image":"zamg/png/-.png"
		}
	},
	"1":{
		"day":{
			"description":"Hauptsächlich sonnig",
			"image":"zamg/png/B.png"
		},
		"night":{
			"description":"Hauptsächlich klar",
			"image":"zamg/png/halbmond.png"
		}
	},
	"2":{
		"day":{
			"description":"Teilweise bewölkt",
			"image":"zamg/png/C.png"
		},
		"night":{
			"description":"Teilweise bewölkt",
			"image":"zamg/png/bewolkte-nacht.png"
		}
	},
	"3":{
		"day":{
			"description":"Wolkig",
			"image":"zamg/png/E.png"
		},
		"night":{
			"description":"Wolkig",
			"image":"zamg/png/E.png"
		}
	},
	"45":{
		"day":{
			"description":"Nebelig",
			"image":"zamg/png/T.png"
		},
		"night":{
			"description":"Nebelig",
			"image":"zamg/png/T.png"
		}
	},
	"48":{
		"day":{
			"description":"Raureifnebel",
			"image":"zamg/png/T.png"
		},
		"night":{
			"description":"Raureifnebel",
			"image":"zamg/png/T.png"
		}
	},
	"51":{
		"day":{
			"description":"Leichter Nieselregen",
			"image":"zamg/png/R.png"
		},
		"night":{
			"description":"Leichter Nieselregen",
			"image":"zamg/png/R.png"
		}
	},
	"53":{
		"day":{
			"description":"Nieselregen",
			"image":"zamg/png/T.png"
		},
		"night":{
			"description":"Nieselregen",
			"image":"zamg/png/T.png"
		}
	},
	"55":{
		"day":{
			"description":"Starker Nieselregen",
			"image":"zamg/png/R.png"
		},
		"night":{
			"description":"Starker Nieselregen",
			"image":"zamg/png/R.png"
		}
	},
	"56":{
		"day":{
			"description":"Leichter eiskalter Nieselregen",
			"image":"zamg/png/R.png"
		},
		"night":{
			"description":"Leichter eiskalter Nieselregen",
			"image":"zamg/png/R.png"
		}
	},
	"57":{
		"day":{
			"description":"Eisiger Nieselregen",
			"image":"zamg/png/R.png"
		},
		"night":{
			"description":"Eisiger Nieselregen",
			"image":"zamg/png/R.png"
		}
	},
	"61":{
		"day":{
			"description":"Leichter Regen",
			"image":"zamg/png/J.png"
		},
		"night":{
			"description":"Leichter Regen",
			"image":"zamg/png/J.png "
		}
	},
	"63":{
		"day":{
			"description":"Regen",
			"image":"zamg/png/H.png"
		},
		"night":{
			"description":"Regen",
			"image":"zamg/png/H.png "
		}
	},
	"65":{
		"day":{
			"description":"Starker Regen",
			"image":"zamg/png/I.png"
		},
		"night":{
			"description":"Starker Regen",
			"image":"zamg/png/I.png"
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
			"image":"zamg/png/N.png "
		},
		"night":{
			"description":"Leichter Schnee",
			"image":"zamg/png/N.png "
		}
	},
	"73":{
		"day":{
			"description":"Schnee",
			"image":"zamg/png/O.png "
		},
		"night":{
			"description":"Schnee",
			"image":"zamg/png/O.png "
		}
	},
	"75":{
		"day":{
			"description":"Starker Schneefall",
			"image":"zamg/png/P.png "
		},
		"night":{
			"description":"Starker Schneefall",
			"image":"zamg/png/P.png "
		}
	},
	"77":{
		"day":{
			"description":"Schneekörner",
			"image":"zamg/png/P.png"
		},
		"night":{
			"description":"Schneekörner",
			"image":"zamg/png/P.png"
		}
	},
	"80":{
		"day":{
			"description":"Leichte Schauer",
			"image":"zamg/png/J.png"
		},
		"night":{
			"description":"Leichte Schauer",
			"image":"zamg/png/J.png"
		}
	},
	"81":{
		"day":{
			"description":"Schauer",
			"image":"zamg/png/H.png"
		},
		"night":{
			"description":"Schauer",
			"image":"zamg/png/H.png"
		}
	},
	"82":{
		"day":{
			"description":"Starke Schauer",
			"image":"zamg/png/H.png"
		},
		"night":{
			"description":"Starke Schauer",
			"image":"zamg/png/H.png"
		}
	},
	"85":{
		"day":{
			"description":"Leichte Schneeschauer",
			"image":"zamg/png/N.png"
		},
		"night":{
			"description":"Leichte Schneeschauer",
			"image":"zamg/png/N.png"
		}
	},
	"86":{
		"day":{
			"description":"Schneeschauer",
			"image":"zamg/png/O.png"
		},
		"night":{
			"description":"Schneeschauer",
			"image":"zamg/png/O.png"
		}
	},
	"95":{
		"day":{
			"description":"Gewitter",
			"image":"zamg/png/U.png"
		},
		"night":{
			"description":"Gewitter",
			"image":"zamg/png/V.png"
		}
	},
	"96":{
		"day":{
			"description":"Leichte Gewitter mit Hagel",
			"image":"zamg/png/V.png"
		},
		"night":{
			"description":"Leichte Gewitter mit Hagel",
			"image":"zamg/png/V.png"
		}
	},
	"99":{
		"day":{
			"description":"Gewitter mit Hagel",
			"image":"zamg/png/Z.png"
		},
		"night":{
			"description":"Gewitter mit Hagel",
			"image":"zamg/png/X.png"
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
			let s_description = document.getElementById(`wt-s-${day}`).getElementsByClassName("s-description");
            let description = document.getElementById(`wt-${day}`).getElementsByClassName("description");
            description[0].innerHTML += format_date(weather_data.daily.time[days.indexOf(day)]) + " " + weekDays[newdate.getDay()]
			s_description[0].innerHTML += format_date(weather_data.daily.time[days.indexOf(day)]) + " " + weekDays[newdate.getDay()]
            
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
            '<img src="'+ codes[data.weather_code[hourly_index]][is_day].image+'">' + "<p>"+ 
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
</script>