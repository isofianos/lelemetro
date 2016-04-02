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
  smallImage.style.heigth = '100px';
  localStorage.setItem('profileImg', JSON.stringify({src:imageData, width:smallImage.style.width, heigth:smallImage.style.heigth}));
}

function onPhotoURISuccess(imageURI) {
  var largeImage = document.getElementById('profile');
  largeImage.src = imageURI;
  largeImage.style.heigth = '100px';
  localStorage.setItem('profileImg', JSON.stringify({src:imageURI, width:largeImage.style.width, heigth:largeImage.style.heigth}));
}
function capturePhotoWithFile() {
  navigator.camera.getPicture(onPhotoFileSuccess, onFail, { 
    quality: 50, 
    destinationType: Camera.DestinationType.FILE_URI,
    saveToPhotoAlbum: true
  });
}

function getPhoto(source) {
  // Retrieve image file location from specified source
  navigator.camera.getPicture(onPhotoURISuccess, onFail, { 
    quality: 50, 
    destinationType: destinationType.FILE_URI,
    sourceType: source
  });
}

function onFail(message) {
}