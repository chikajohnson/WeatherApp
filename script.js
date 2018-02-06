if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
}
else{
    alert("Geolocation is not supported !!!");
}
//Get the latitude and the longitude;
function successFunction(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    console.log(lat, lng);
}

function errorFunction() {
    alert("Geocoder failed");
}