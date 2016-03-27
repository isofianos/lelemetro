var today = new Date();
var noobyDay = new Date('November, 09, 2015');
var leleDay = new Date('August, 08, 2016');

document.getElementById('newImage').onclick = function(){
  capturePhotoWithFile();
}
document.getElementById('libImage').onclick = function(){
  getPhoto(pictureSource.PHOTOLIBRARY);
}
document.getElementById('profile').onclick = function(){
	capturePhotoWithFile();
}

function dateDiffInDays(d1, d2){
	var t2 = d2.getTime();
    var t1 = d1.getTime();
    return parseInt((t2-t1)/(24*3600*1000));
}

document.getElementById('daysDone').innerHTML = dateDiffInDays(noobyDay, today);
document.getElementById('daysLeft').innerHTML = dateDiffInDays(today, leleDay) + 1;