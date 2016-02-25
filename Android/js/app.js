var latitude;
var longitude;

var onSuccessGeo = function(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
};

// onError Callback receives a PositionError object
//
function onErrorGeo(error) {
    latitude = null;
    longitude = null;
    
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

