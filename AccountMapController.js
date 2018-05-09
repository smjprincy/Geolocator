({
    jsLoaded: function(component, event, helper) {
        var map = L.map('map', {zoomControl: false, tap: false},14);
        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
            {
                attribution: 'Tiles © Esri'
            }).addTo(map);
        function onLocationFound(e) {
        var radius = e.accuracy / 2;
		alert(e.latlng);
           // //var mark1=component.get('v.mark');
            var circ1=component.get('v.circ');
            //map.removeLayer(mark1);
           // map.removeLayer(circ1);
        var mark=L.marker(e.latlng).addTo(map)
            .bindPopup("You are within " + radius + " meters from this point").openPopup();

        var circ=L.circle(e.latlng, radius).addTo(map);
            //component.set('v.mark',mark);
           // component.set('v.circ',circ);
    }

    function onLocationError(e) {
        alert(e.message);
    }

    map.on('locationfound', onLocationFound);
    map.on('locationerror', onLocationError);

        map.locate({setView: true, maxZoom: 16, enableHighAccuracy: true});
        
        component.set("v.map", map);
    }

})