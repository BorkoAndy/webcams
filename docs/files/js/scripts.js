// function fwFrameResize() {
//     var f= document.getElementsByClassName("fw-player");
//     var h= f[0].offsetWidth*9/16;
//     for(var i=0;i<f.length;i++) f[i].style.height= (h+((h<450)?145:95))+"px";
//     } 
//     window.addEventListener("resize", fwFrameResize); fwFrameResize();

    function pop_up1(source) {
        window.open(source, "winnameBigFOto", " directories=0, titlebar=0, toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1200px, height=800px, top=200px left=200px");
        return false;
    }

    function pop_up(element) {
        document.getElementById("img01").src = element.src;
        document.getElementById("modal01").style.display = "block";
      }



function delete_banners(){
    elem = document.getElementById("topBar");
    console.log(elem);
}

function scrolltodiv(div_id){
    document.getElementById(div_id).scrollIntoView({ behavior: "smooth", block: "start"});
}


var map = L.map('leaflet-maps').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: ''
}).addTo(map);
