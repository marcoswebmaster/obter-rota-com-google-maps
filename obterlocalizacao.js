  var directionDisplay;
      var directionsService = new google.maps.DirectionsService();
      var map;

      function initialize() {
        directionsDisplay = new google.maps.DirectionsRenderer();
        var latlng = new google.maps.LatLng(-14.235004, -51.925280);
        var mapOptions = {
          zoom:7,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          center: latlng
        }
        map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
        directionsDisplay.setMap(map);
        directionsDisplay.setPanel(document.getElementById("directionsPanel"));
      }

      function calcRoute() {
        var start = document.getElementById('localizacao').value;
        var end = document.getElementById('end').value;
        var mode;

        switch ( document.getElementById("mode").value)
        {
          case 'transportepublico' :
            mode = google.maps.DirectionsTravelMode.TRANSIT;
            break;
          case 'carro':
            mode = google.maps.DirectionsTravelMode.DRIVING;
            break;
          case 'andando':
            mode = google.maps.DirectionsTravelMode.WALKING;
            break;
        }
        var request = {
            origin:start,
            destination:end,
            travelMode: mode
        };
        directionsService.route(request, function(response, status) {
          if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
          }
        });
      }

       function updateMode() {
             calcRoute();
        }

        function clearMarkers() {
          directionsDisplay = new google.maps.DirectionsRenderer();
          var latlng = new google.maps.LatLng(-14.235004, -51.925280);
          var mapOptions = {
          zoom:16,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          center: latlng
        }
        map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
        document.getElementById('end').value = "";
        }

        function reset() {
          directionsDisplay.setMap(null);
          directionsDisplay.setPanel(null);
          directionsDisplay = new google.maps.DirectionsRenderer();
          directionsDisplay.setMap(map);
          directionsDisplay.setPanel(document.getElementById("directionsPanel")); 

        } 