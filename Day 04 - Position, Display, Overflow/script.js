
let setTime = () => {

    // Accessing the time by creating a Date object
    let currentTime = new Date();
    var hours = currentTime.getHours(),
        minutes = currentTime.getMinutes();
        seconds = currentTime.getSeconds();

    console.log(hours + " : " + minutes + " : " + seconds);
    
    let secondDegrees = (seconds * 6) - 90,
        minuteDegrees = (minutes * 6) - 90,
        hourDegrees = (hours > 12) ? (hours-12) : hours;

    hourDegrees *= (hourDegrees * 30) - 90;
    hourDegrees += (minutes / 10) * 6;

    document.querySelector(".second-hand-hinge").style.transform = "rotate(" + secondDegrees + "deg)";
    document.querySelector(".minute-hand-hinge").style.transform = "rotate(" + minuteDegrees + "deg)";
    document.querySelector(".hour-hand-hinge").style.transform = "rotate(" + hourDegrees + "deg)"
    
}

setInterval(() => {
    setTime();
},1000);


