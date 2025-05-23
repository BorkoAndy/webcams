 
    var map = L.map('map').setView([47.261822, 13.545545], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.nc-werbung.at/">NC Werbung</a>'
    }).addTo(map);

    L.marker([47.24862632545557, 13.562718780862054]).addTo(map)
        .bindPopup('Luerzer <a href="https://www.luerzer.at" target="_blank">Website</a> <a href="#" target="_blank">Webcam</a>')
        .on('mouseover', function (e) {
            this.openPopup();
        })

        
    L.marker([47.24754641144264, 13.56290231895924]).addTo(map)
        .bindPopup('Cinderella <a href="https://www.cinderella-obertauern.at" target="_blank">Website</a> <a href="#" onclick="openImage(`https://www.cinderella-obertauern.at/obertauern-webcam/hotel-cinderella-obertauern.jpg`) target="_blank">Webcam</a>')
        .on('mouseover', function (e) {
            this.openPopup();
        })

    L.marker([47.268459921217996, 13.497015878036473]).addTo(map)
        .bindPopup(
            'Gnadealm <img src="files/img/gnadealm.png"></img> <a href="https://www.gnadenalm.com/" target="_blank">Website</a> <a href="#" onclick="openImage(`https://www.gnadenalm.com/obertauern_webcam/obertauern_webcam.jpg`)" target="_blank">Webcam</a> <a href="#" onclick="openWetter(`47.268459921217996, 13.497015878036473`)" target="_blank">Wetter</a>')
        .on('mouseover', function (e) {
            this.openPopup();
        })
        // marker.on('mouseout', function (e) {
        //     this.closePopup();
        // });

    L.marker([47.248361594114606, 13.557181568692029]).addTo(map)
        .bindPopup(
            'Pension Gloria <img src="files/img/gloria.png"></img> <a href="https://www.gloria.at" target="_blank">Website</a> <a href="#" onclick="openImage(`https://www.gloria.at/webcam/obertauern-webcam.jpg`)" target="_blank">Webcam</a>')
        .on('mouseover', function (e) {
            this.openPopup();
        })

    L.marker([47.268619180094426, 13.575836573046091]).addTo(map)
        .bindPopup(
            'Hundskogel <img src="files/img/Hundskogel.png"></img> <a href="https://de.wikipedia.org/wiki/Hundskogel" target="_blank">Wikipedia</a> <a href="https://obertauern.panomax.com/hundskogel?r=287&z=100&tl=0" target="_blank">Webcam</a>')
        .on('mouseover', function (e) {
            this.openPopup();
        })

    L.marker([47.24143007832632, 13.556887165244643]).addTo(map)
        .bindPopup(
            'Gamsleiten 1 <img src="files/img/gamsleiten-1.jpg"></img> <a href="https://www.ski-obertauern.at/" target="_blank">Website</a> <a href="https://obertauern.panomax.com/gamsleiten?r=156&z=100&tl=0"  target="_blank">Webcam</a>')
        .on('mouseover', function (e) {
            this.openPopup();
        })

    L.marker([47.245830671070124, 13.56157372689441]).addTo(map)
        .bindPopup(
            'Hotel Schneider <img src="files/img/schneider.png"></img> <a href="https://www.schneider.at/de/" target="_blank">Website</a> <a href="#" onclick="openImage(`https://webcam.schneider.at/obertauern-hotel-schneider.jpg?t=1743419196423`)" target="_blank">Webcam</a>')
        .on('mouseover', function (e) {
            this.openPopup();
        })
    
    L.marker([47.25153413144079, 13.53972671340274]).addTo(map)
        .bindPopup(
            'Haus Petergstamm <img src="files/img/petergstamm.png"> </img><a href="https://www.petergstamm-obertauern.at/" target="_blank">Website</a> <a href="#" onclick="openImage(`https://petergstamm-obertauern.at/images/webcam/webcam_obertauern.jpg`)" target="_blank">Webcam</a>')
        .on('mouseover', function (e) {
            this.openPopup();
        })

    L.marker([47.25223770402306, 13.53102546313954]).addTo(map)
        .bindPopup(
            'Almschloessl <img src="files/img/Almschloessl.png"> </img><a href="https://www.almschloessl.com/" target="_blank">Website</a> <a href="#" onclick="openImage(`https://www.almschloessl.com/~schrott01/Schrotteralm_Full_HiRes.jpg`)" target="_blank">Webcam</a>')
        .on('mouseover', function (e) {
            this.openPopup();
        })

    L.marker([47.2414797516077, 13.572123072926688]).addTo(map)
        .bindPopup(
            'Breitlehenalm <img src="files/img/breitlehenalm.png"></img> <a href="https://www.breitlehenalm.at/de/" target="_blank">Website</a> <a href="#" onclick="openImage(`https://obertauern.breitlehenalm.com/obertauern-webcam.jpg`)" target="_blank">Webcam</a>')
        .on('mouseover', function (e) {
            this.openPopup();
        })

    L.marker([47.24626875318407, 13.562128571074563]).addTo(map)
        .bindPopup(
            'Hotel Panorama <img src="files/img/panorama.png"></img> <a href="https://www.panorama-obertauern.at/" target="_blank">Website</a> <a href="#" onclick="openImage(`http://www.panorama-obertauern.at/webcam-obertauern/webcam1.jpg`)" target="_blank">Webcam</a>')
        .on('mouseover', function (e) {
            this.openPopup();
        })
        
    L.marker([47.24786475978527, 13.560469791727801]).addTo(map)
        .bindPopup(
            'Gasthof Sailer <img src="files/img/sailer.png"></img> <a href="https://www.sailer-obertauern.at/" target="_blank">Website</a> <a href="#" onclick="openImage(`https://www.sailer-obertauern.at/webcam/obertauern-webcam.jpg`)" target="_blank">Webcam</a>')
        .on('mouseover', function (e) {
            this.openPopup();
        })

    L.marker([47.24218554468686, 13.572355884566413]).addTo(map)
        .bindPopup(
            'Hotel Auerhahn <img src="files/img/auerhahn.png"></img> <a href="https://www.auerhahn-obertauern.at/" target="_blank">Website</a> <a href="#" onclick="openImage(`https://www.auerhahn-obertauern.at/webcam/obertauern-webcam.jpg`)" target="_blank">Webcam</a>')
        .on('mouseover', function (e) {
            this.openPopup();
        })

    L.marker([47.26473552079525, 13.563627574321607]).addTo(map)
        .bindPopup(
            'Seekar Talstation <img src="files/img/SeekarTal.png"> <a href="https://www.seekarhaus.at/de/" target="_blank">Website</a> <a href="#" onclick="openFrame(`https://www.foto-webcam.eu/webcam/obertauern1/?frame=1`)" target="_blank">Webcam</a>')
        .on('mouseover', function (e) {
            this.openPopup();
        })

    L.marker([47.27069833184182, 13.547622830588693]).addTo(map)
        .bindPopup(
            'Seekar Bergstation <img src="files/img/SeekarBerg.png"></img><a href="https://www.seekarhaus.at/de/" target="_blank">Website</a> <a href="#" onclick="openFrame(`https://www.foto-webcam.eu/webcam/obertauern2/?frame=1`)"  target="_blank">Webcam</a>')
        .on('mouseover', function (e) {
            this.openPopup();
        })
    
    L.marker([47.26429939818162, 13.56484205573102]).addTo(map)
        .bindPopup('Hotel Seekarhaus <img src="files/img/seekarhaus.png"></img> <a href="https://www.seekarhaus.at/de/" target="_blank">Website</a> <a href="#" onclick="openFrame(`https://www.foto-webcam.eu/webcam/obertauern3/?frame=1`)"  target="_blank">Webcam</a>')
        .on('mouseover', function (e) {
            this.openPopup();
        })

    L.marker([47.26010632089782, 13.564853406758408]).addTo(map)
        .bindPopup('Hundsfeldsee <img src="files/img/hundsfeldsee.png"></img> <a href="#" target="_blank">Website</a> <a href="#" onclick="onclick="openFrame(`https://www.foto-webcam.eu/webcam/hundsfeldsee/?frame=1`)" target="_blank">Webcam kaputt</a>')
        .on('mouseover', function (e) {
            this.openPopup();
        })

    L.marker([47.247705, 13.559235]).addTo(map)
        .bindPopup('Zehnerkar <img src="files/img/zehnerkar.png"></img> <a href="https://www.zehnerkar.at/" target="_blank">Website</a> <a href="#" onclick="openCodeWindow(`https://www.obertauern-ski.at/zehnerkar.jpg`, `//s1.live-panorama.com/keblivestreaming/streams/zkb.m3u8`)" target="_blank">Webcam</a>')
        .on('mouseover', function (e) {
            this.openPopup();
        })

    L.marker([47.249752, 13.54937]).addTo(map)
        .bindPopup('Kirchbuehel <img src="files/img/kirchbuehel.png"></img> <a href="#" target="_blank">Website</a> <a href="#" onclick="openCodeWindow(`https://www.obertauern-ski.at/kirchbuehel.jpg`,`//s1.live-panorama.com/keblivestreaming/streams/zhk.m3u8`)" target="_blank">Webcam</a>')
        .on('mouseover', function (e) {
            this.openPopup();
        })

    L.marker([47.250611, 13.545803]).addTo(map)
        .bindPopup('Gruenwaldkopf <img src="files/img/gruenwaldkopf.png"></img> <a href="#" target="_blank">Website</a> <a href="#" onclick="openCodeWindow(`https://www.obertauern-ski.at/gruenwaldkopf.jpg`,`//s1.live-panorama.com/keblivestreaming/streams/gwk.m3u8`)" target="_blank">Webcam</a>')
        .on('mouseover', function (e) {
            this.openPopup();
        })

    L.marker([47.261822, 13.545545]).addTo(map)
        .bindPopup('Hochalmkopf <img src="https://www.obertauern-ski.at/hochalmkopf.jpg"></img> <a href="#" target="_blank">Website</a> <a href="#" onclick="openCodeWindow(`https://www.obertauern-ski.at/hochalmkopf.jpg`,`//s1.live-panorama.com/keblivestreaming/streams/hak.m3u8`)" target="_blank">Webcam</a>')
        .on('mouseover', function (e) {
            this.openPopup();
        })

    L.marker([47.264019, 13.565097]).addTo(map)
        .bindPopup('Seekar <img src="files/img/seekar.png"></img> <a href="#" target="_blank">Website</a> <a href="#" onclick="openCodeWindow(`https://www.obertauern-ski.at/seekar.jpg`,`//s1.live-panorama.com/keblivestreaming/streams/skr.m3u8`)" target="_blank">Webcam</a>')
        .on('mouseover', function (e) {
            this.openPopup();
        })

    L.marker([47.246892, 13.566824]).addTo(map)
        .bindPopup('Plattenkar <img src="files/img/plattenkar.png"></img> <a href="#" target="_blank">Website</a> <a href="#" onclick="openCodeWindow(`https://www.obertauern-ski.at/plattenkar.jpg`,`//s1.live-panorama.com/keblivestreaming/streams/pkr.m3u8`)" target="_blank">Webcam</a>')
        .on('mouseover', function (e) {
            this.openPopup();
        })

    L.marker([47.24693, 13.561242]).addTo(map)
        .bindPopup('Gamsleiten <img src="files/img/gamsleiten.png"></img> <a href="#" target="_blank">Website</a> <a href="#" onclick="openCodeWindow(`https://www.obertauern-ski.at/gamsleiten.jpg`,`//s1.live-panorama.com/keblivestreaming/streams/gml.m3u8`)" target="_blank">Webcam</a>')
        .on('mouseover', function (e) {
            this.openPopup();
        })

    L.marker([47.24146, 13.572952]).addTo(map)
        .bindPopup('Schaidberg  <img src="files/img/schaidberg.png"></img>  <a href="#" target="_blank">Website</a> <a href="#" onclick="openCodeWindow(`https://www.obertauern-ski.at/schaidberg.jpg`,`//s1.live-panorama.com/keblivestreaming/streams/sbg.m3u8`)" target="_blank">Webcam</a>')
        .on('mouseover', function (e) {
            this.openPopup();
        })
    
    
 

  
    function openImage(img_src) {
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
    function openFrame(frame_src) {
        // event.preventDefault();
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
      
     function openCodeWindow(poster, source) {
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

      const win = window.open("", "_blank", "width=610,height=400");
      win.document.open();
      win.document.write(code);
      win.document.close();
    }
// Not ready
      function openWeather(lat, lon) {
      const code = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Weather</title>                     
        </head>
        <body>
         
        </body>
        </html>
      `;

      const win = window.open("", "_blank", "width=1400,height=800");
      win.document.open();
      win.document.write(code);
      win.document.close();
    }

//EndOf not ready