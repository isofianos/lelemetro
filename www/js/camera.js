var pictureSource;   // picture source
var destinationType; // sets the format of returned value 

document.addEventListener("deviceready",onDeviceReady,false);

function onDeviceReady() {
    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;
}

function onPhotoFileSuccess(imageData) {
  var smallImage = document.getElementById('profile');
  smallImage.src = imageData;
}
function capturePhotoWithFile() {
  navigator.camera.getPicture(onPhotoFileSuccess, onFail, { quality: 100, destinationType: Camera.DestinationType.FILE_URI });
}

function getPhoto(source) {
  navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
    destinationType: destinationType.FILE_URI,
    sourceType: source });
}

function onPhotoURISuccess(imageURI) {
  var largeImage = document.getElementById('profile');
  largeImage.src = imageURI;
}