GoogleMapsLoader.KEY = GOOGLEMAPSKEY;
GoogleMapsLoader.LANGUAGE = 'en';
GoogleMapsLoader.REGION = 'GB';

GoogleMapsLoader.load(function(google) {
    if (typeof MAPDATA !== 'undefined') {
        for (var m in MAPDATA) {
            
            /* Create the map */
            var map = new google.maps.Map(document.getElementById(m), ('options' in MAPDATA[m]) ? MAPDATA[m]['options'] : {});
            
            /* Fetch custom marker icon */
            var map_markericon = (('options' in MAPDATA[m]) && ('markericon' in MAPDATA[m]['options'])) ? MAPDATA[m]['options']['markericon'] : false;
            
            if (map_markericon) {
                if ('anchor' in map_markericon) {
                    map_markericon['anchor'] = new google.maps.Point(map_markericon['anchor'][0], map_markericon['anchor'][1]);
                }
                if ('origin' in map_markericon) {
                    map_markericon['origin'] = new google.maps.Point(map_markericon['origin'][0], map_markericon['origin'][1]);
                }
                if ('size' in map_markericon) {
                    map_markericon['size'] = new google.maps.Size(map_markericon['size'][0], map_markericon['size'][1]);
                }
            }
            
            /* Add the markers */
            if ('markers' in MAPDATA[m]) {
                for (var mm in MAPDATA[m]['markers']) {
                    
                    // Grab the marker data
                    var opts = MAPDATA[m]['markers'][mm];
                    
                    // Add our map
                    opts['map'] = map;
                    
                    // Add generic marker icon if available and the marker is 
                    // using the default icon
                    if (map_markericon && !('icon' in opts)) {
                        opts['icon'] = map_markericon;
                        
                        if ('shape' in map_markericon) {
                            opts['shape'] = map_markericon['shape'];
                        }
                    }
                    
                    // Create the marker
                    var marker = new google.maps.Marker(opts);
                }
            }
        }
    }
});