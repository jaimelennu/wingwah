"use strict";

$(document).ready(function() {
   var mapElem = document.getElementById('map');
   var center = {
      lat: 47.599150,
      lng: -122.320049
   };

   var map = new google.maps.Map(mapElem, {
      center: center,
      zoom: 12
   });

    var infoWindow = new google.maps.InfoWindow();

    var marker = new google.maps.Marker({
               position: {
                  lat: 47.599150,
                  lng: -122.320049
               },
               map: map
            });

    google.maps.event.addListener(marker, 'click', function() {
               map.panTo(this.getPosition());
               var html = '<h2>' + Wing Wah Bistro + '</h2>';

               infoWindow.setContent(html);
               infoWindow.open(map, this);
            });
