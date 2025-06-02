 var map = L.map('map').setView([47.09550218205032, 13.6297433274869], 13);
    
	//Layers
	var default_layer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: ''
    }).addTo(map);

	
    //Independed
    // var TopPlusOpen_Color = 
    var TopPlus = L.tileLayer('http://sgx.geodatenzentrum.de/wmts_topplus_open/tile/1.0.0/web/default/WEBMERCATOR/{z}/{y}/{x}.png', {
	maxZoom: 18,
	attribution: ''
    });

    //OpenTopo
    var OpenMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: ''
    });

    // Stadia_AlidadeSatellite - 
    var StadiaSat = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 20,
	attribution: '',
	ext: 'jpg'
    });

    // var Esri_WorldImagery
    var Esri = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: ''
    });
    
    
    //TO ADD
   





    //Additional
    // Pistes
    var pistes = L.tileLayer('https://tiles.opensnowmap.org/pistes/{z}/{x}/{y}.png', {
	minZoom: 9,
	maxZoom: 18,
	attribution: ''
    });    

    // Slopes -> can be added to other layers
    var slopes = L.tileLayer('https://tile.waymarkedtrails.org/slopes/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: ''
    });

    // MountainBike
    var mtb = L.tileLayer('https://tile.waymarkedtrails.org/mtb/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: ''
    });

    // Cycling
    var cycling = L.tileLayer('https://tile.waymarkedtrails.org/cycling/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: ''
    });

    // Hiking
    var hiking = L.tileLayer('https://tile.waymarkedtrails.org/hiking/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: ''
    });
	
    
    let base_layer_selector = document.getElementById("base_layers");
    base_layer_selector.addEventListener('change', change_base_layer);    
    let add_layer_selector = document.getElementById("add_layers");
    add_layer_selector.addEventListener('change', add_additional_layer);
    

    function change_base_layer(){
        
        switch(base_layer_selector.value) {
            case 'TopPlus':
                layer = TopPlus;
                break;
            case 'OpenMap':
                layer = OpenMap;
                break;
            case 'StadiaSat':
                layer = StadiaSat;
                break;
            case 'Esri':
                layer = Esri;
                break;
            default:
                layer = default_layer;
        }
        map.eachLayer(function (layer) {
            map.removeLayer(layer);
            });
        layer.addTo(map);
    }

    function add_additional_layer(){
        switch(add_layer_selector.value) {
            case 'no_layer':
                layer = change_base_layer();
                break;
            case 'pistes':
                layer = pistes;
                break;
            case 'slopes':
                layer = slopes;
                break;
            case 'mtb':
                layer = mtb;
                break;
            case 'cycling':
                layer = cycling;
                break;
            case 'hiking':
                layer = hiking;
                break;
            default:
                layer = change_base_layer();
        } 
        
        layer.addTo(map);
    }