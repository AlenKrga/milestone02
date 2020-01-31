 function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: {
            lat: 45.159516,
            lng: 13.906152
        }
    });
        
        

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 45.075674, lng: 13.637736 }, //Rovinj
        { lat: 44.866355, lng: 13.847376 }, //Pula
        { lat: 44.910338, lng: 13.771449 }  //Brijuni
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
 }
     
     
     
function moveMap() { 
       switch (document.getElementById("mytop3").value) {
          case "rovinj":
                map = new google.maps.Map(document.getElementById('map'), {
                 zoom:  2,
                 center: {lat: 45.075674, 
                          lng: 13.637736 }, //Rovinj//
                   
                });
                break;
           case "pula":
               map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 2,
                    center: {lat: 44.866355, 
                             lng: 13.847376}, //Pula//
                   
               });
               break;
          case "brijuni":
               map = new google.maps.Map(document.getElementById('map'), {
                   zoom: 2,
                   center: {lat: 44.910338,
                            lng: 13.771449}, //Brijuni//
                   
                });
               break;
           default:
       }
}
 
