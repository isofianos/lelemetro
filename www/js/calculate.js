var today = new Date();
var noobyDay = new Date('November, 09, 2015');
var leleDay = new Date('August, 08, 2016');

progressBar();

var profileImg = JSON.parse(localStorage.getItem('profileImg'));
var rankImg = JSON.parse(localStorage.getItem('rankImg'));

if(profileImg){
	document.getElementById('profile').src = profileImg.src;
	document.getElementById('profile').style.width = profileImg.width;
	document.getElementById('profile').style.height = profileImg.height;
}else{
	document.getElementById('profile').src = './img/default.png';
}
var daysOff = localStorage.getItem('daysOff');
daysOff = JSON.parse(daysOff);

document.getElementById('days').onkeyup = function(){
	localStorage.setItem('daysOff', JSON.stringify(this.value));
}

document.getElementById("days").value = daysOff!=null ? daysOff : 0 ;

document.getElementById('rankImg').src = rankImg ? rankImg : './img/rank.png' ;

document.getElementById('newImage').onclick = function(){
  capturePhotoWithFile();
  window.location = "#close";
}
document.getElementById('libImage').onclick = function(){
  getPhoto(pictureSource.PHOTOLIBRARY);
  window.location = "#close";
}

function dateDiffInDays(d1, d2){
	var t2 = d2.getTime();
    var t1 = d1.getTime();
    return parseInt((t2-t1)/(24*3600*1000));
}

function progressBar(){
	var total = dateDiffInDays(noobyDay ,leleDay);
	var done = dateDiffInDays(noobyDay, today);
	document.getElementById('myBar').style.width = ((done*100)/total) +"%";
}

document.getElementById('daysDone').innerHTML = dateDiffInDays(noobyDay, today);
document.getElementById('daysLeft').innerHTML = dateDiffInDays(today, leleDay) + 1;