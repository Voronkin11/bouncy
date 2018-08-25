(function() {
	
	var mapElement = document.getElementById('map');
	var place = {
		lat: 49.568488,
		lng: 34.585427
	};

	var map = new google.maps.Map(
		mapElement, 
		{
			zoom: 16, 
			center: place
		}
	);

	var marker = new google.maps.Marker({
		position: place,
		map: map,
		icon: "img/map-marker.png"
	});
 
})();
