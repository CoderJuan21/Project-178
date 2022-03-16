let latitude = 40.712776, longitude = -74.005974;
mapboxgl.accessToken = 'pk.eyJ1IjoianVhbm56IiwiYSI6ImNsMHJicmsxMjAxemozcXF3ZWlmZ3F0NW8ifQ.4gwk-5edixoQmMES0Zcq0Q'
var map = new mapboxgl.Map({
    container:"map",
    style:'mapbox://styles/mapbox/streets-v11',
    center:[longitude, latitude],
    zoom:16
});

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{
            enableHighAccuracy:true
        },
        trackUserLocation:false,
    })
);
map.addControl(
    new MapboxDirections({
        accessToken:mapboxgl.accessToken
    }),
    'top-left'
);

var img1 = document.querySelector("#ny")

var marker1 = new mapboxgl.marker({
    element:img1
})
.setLngLat([74.0060,40.7128])
.addTo(map);