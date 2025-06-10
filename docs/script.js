 
    var map = L.map('map').setView([47.261822, 13.545545], 13);
    
	//Layers
	var layer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: ''
    });
	
	layer.addTo(map);
  
    function image(img_src) {
        event.preventDefault();
        console.log(img_src)
      const imageUrl = img_src; // Replace with your image URL
      const img = new Image();
      img.src = imageUrl;

      img.onload = function() {
        const width = img.naturalWidth;
        const height = img.naturalHeight;

        // Calculate center position
        const screenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
        const screenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;

        const left = screenLeft + (window.innerWidth - width) / 2;
        const top = screenTop + (window.innerHeight - height) / 2;

        const features = `width=${width},height=${height},top=${top},left=${left}`;

        const imgWindow = window.open("", "_blank", features);
        imgWindow.document.write(`
          <html>
            <head><title>Image</title></head>
            <body style="margin:0;">
              <img src="${img_src}" width="${width}" height="${height}" style="display:block;" />
            </body>
          </html>
        `);
      };
    }
    function frame(frame_src) {        
        const width = 500;
        const height = 400;
        const screenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
        const screenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;

        const left = screenLeft + (window.innerWidth - width) / 2;
        const top = screenTop + (window.innerHeight - height) / 2;

        const features = `width=${width},height=${height},top=${top},left=${left}`;

        const imgWindow = window.open("", "_blank", features);
        imgWindow.document.write(`
          <html>
            <head><title>Image</title></head>
            <body style="margin:0;">
              <iframe class="col-5" width="99%" scrolling="no" class="fw-player" allowfullscreen="1"  frameborder=0 src="${frame_src}" style="height:100%"></iframe>
            </body>
          </html>
        `);
      };
      
     function m3u8_player(poster, source) {
      let title = "hi!";
      open_m3u8(poster, source, title)
      const code = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>My New Window</title>
            <script src="files/js/hls.js"></script>
            <script src="files/js/webcams_player.js"></script>         
        </head>
        <body>
          <video id="camvideo_1" 
                    onclick="play_webcam_video('camvideo_1')" 
                    poster=${poster} 
                    src=${source} 
                    type="application/x-mpegURL" muted="muted" controls role="application"
                    style="width:600px;">
                </video>
        </body>
        </html>
      `;

      // const win = window.open("", "_blank", "width=610,height=400");
      // win.document.open();
      // win.document.write(code);
      // win.document.close();
    }

	function panomax (panomax_src) {
		window.open(panomax_src, "_blank", "width=1400,height=800");
	}

var pop_up_info = []	
	fetch("pop_ups.json")
		.then(result => result.json())
		.then(data=>{
			 for(var i in data)
    			pop_up_info.push([i, data [i]]);
			fetch("weather_info.json")
				.then(result =>result.json())
				.then(data=>{
					weather_info = data;
					for(let i=0; i<pop_up_info.length-1; i++)
          {
						
						let lat = pop_up_info[i][1].latitude;
						let lon = pop_up_info[i][1].longitude;
						let title = pop_up_info[i][1].name;
						let image = pop_up_info[i][1].image;
						let website = pop_up_info[i][1].website;
						let webcam = pop_up_info[i][1].webcam;
						let cam_type = pop_up_info[i][1].cam_type;

							fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,is_day,weather_code,cloud_cover&hourly=temperature_2m,weather_code&daily=weather_code&timezone=Europe%2FBerlin`)
    							.then(result => result.json())
    							.then(data =>{
									let is_day = data.current.is_day == 1 ? "day":"night";
									let temperature = Math.round(data.current.temperature_2m) + "°C";									       							     						
        							let weather_font = '<i class="wi '+ weather_info[data.current.weather_code][is_day].font+'"></i>'
									
									L.marker([lat, lon]).addTo(map)
										.bindPopup(`<div class="pop_up_header">${title} <div class="weather_now"><a href="#" onclick="open_forecast('${lat}','${lon}','${title}')"${weather_font} ${temperature}</a></div></div>
											<img src="files/img/${image}"><a href="${website}" target="_blank">Website</a> <a href="#" onclick="${cam_type}('${webcam}')"  target="_blank">Webcam</a>`) //add function to run webcams due to cam_type
										.on('mouseover', function (e) {this.openPopup();})
								})    							
					}					
        		})		
		})	

	


// function get_weather_data(lat, lon) {
//     fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,is_day,weather_code,cloud_cover&hourly=temperature_2m,weather_code&daily=weather_code&timezone=Europe%2FBerlin`)
//     .then(result => result.json())
//     .then(data =>{
//         weather_data = data;
//         console.log(data.current.is_day);
//         set_now(data.current);
//     })
// }

// function set_now(current){ 
// 	is_day = (current.is_day == 1) ? "day" : "night";	
// 	let elem = document.getElementById("weather-font-icon");
	
// 	elem.innerHTML = '<i class="wi '+code_font[current.weather_code][is_day].class+'"></i>'
//     document.getElementById("now_temperature").innerHTML = Math.round(current.temperature_2m) + " °C";
// }

function open_forecast(lat, lon, title) {

	window.open(`weather.html?lat=${lat}&lon=${lon}&name=${title}`,  "_blank", 
                                    `toolbar=no,                                    
                                    status=no,
                                    menubar=no,
                                    scrollbars=yes,
                                    resizable=no,
                                    width=800,
                                    height=400,
                                    top=200,
                                    left=150`);




	//Not almost clear what is the nexxt code for
    // fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,is_day,weather_code,cloud_cover&hourly=temperature_2m,weather_code&daily=weather_code&timezone=Europe%2FBerlin`)
    //     .then(result => result.json())
    //     .then(data =>{
    //     weather_data = data;
    //     console.log(data.current.is_day);        
    // })
    //   const code = `
    //     <!DOCTYPE html>
    //     <html>
    //     <head>
    //       <title>Weather</title>                     
    //     </head>
    //     <body>
         
    //     </body>
    //     </html>
    //   `;

    //   const win = window.open("", "_blank", "width=1400,height=800");
    //   win.document.open();
    //   win.document.write(code);
    //   win.document.close();
    }


//EndOf Weather Module

function open_m3u8(poster, source, title){

  window.open(`m3u8_player.html?poster=${poster}&videosrc=${source}&name=${title}`,  "_blank", 
    `toolbar=no,                                    
    status=no,
    menubar=no,
    scrollbars=yes,
    resizable=no,
    width=800,
    height=400,
    top=200,
    left=150`);
}