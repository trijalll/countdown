var daysEle = document.querySelector("#days span")
var hoursEle = document.querySelector("#hours span")
var minutesEle = document.querySelector("#minutes span")
var secondsEle = document.querySelector("#seconds span")

setInterval(function(){
    var today = new Date();
    var future = new Date(2023, 7, 1, 19, 0, 0, 0);

    var diff = future - today;

    var seconds = Math.floor((diff/1000));
    var minutes = Math.floor((diff/(1000*60)));
    var hours = Math.floor((diff/(1000*60*60)));
    var day = Math.floor((diff/(1000*60*60*24)));

    hours = hours%24;
    minutes = minutes%60;
    seconds = seconds%60;

    daysEle.textContent = day;
    hoursEle.textContent = hours;
    minutesEle.textContent = minutes;
    secondsEle.textContent = seconds;
},1000)