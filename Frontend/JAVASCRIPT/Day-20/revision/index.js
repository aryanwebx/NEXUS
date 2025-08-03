
let timer = document.getElementById("timer");


function timeDisplay() {
    
    let currTime = new Date();

    let hour = currTime.getHours();
    let minute = currTime.getMinutes();
    let second = currTime.getSeconds();

    let format = hour >= 12 ? "P.M." : "A.M.";

    hour = hour % 12;

    hour = hour === 0 ? 12 : hour;



    timer.innerHTML = `${hour} : ${minute} : ${second} ${format}`;

}

setInterval(timeDisplay, 1000);
