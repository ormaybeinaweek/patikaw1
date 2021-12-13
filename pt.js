let username = prompt("İsminizi Giriniz")
if (username) {
	myName.innerHTML = `${username}`
} else {
	alert("İsim Girmediniz")
}



function showTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    let day = weekday[d.getDay()];
    var time = h + ":" + m + " / " + day
    document.getElementById("myClock").innerText = time;
}

showTime()