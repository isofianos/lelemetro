var pictureSource;   // picture source
var destinationType; // sets the format of returned value 

document.addEventListener("deviceready",onDeviceReady,false);

function onDeviceReady() {
  pictureSource=navigator.camera.PictureSourceType;
  destinationType=navigator.camera.DestinationType;
}

function onPhotoDataSuccess(imageData) {
  var smallImage = document.getElementById('profile');
  smallImage.src = "data:image/jpeg;base64," + imageData;
}

function onPhotoFileSuccess(imageData) {
  var smallImage = document.getElementById('profile');
  smallImage.src = imageData;
}

function onPhotoURISuccess(imageURI) {
  var largeImage = document.getElementById('profile');
  largeImage.src = imageURI;
}
function capturePhotoWithData() {
  // Take picture using device camera and retrieve image as base64-encoded string
  navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50 });
}
function capturePhotoWithFile() {
  navigator.camera.getPicture(onPhotoFileSuccess, onFail, { quality: 50, destinationType: Camera.DestinationType.FILE_URI });
}

function getPhoto(source) {
  // Retrieve image file location from specified source
  navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
    destinationType: destinationType.FILE_URI,
    sourceType: source });
}

function onFail(message) {
}