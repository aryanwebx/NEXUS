function timing() {
    const olympicDate = new Date(2028, 6, 14);
    let currDate = new Date();

    let days = document.getElementById('days').innerHTML = Math.floor((olympicDate - currDate) / (1000 * 60 * 60 * 24)) +" days";
    let hours=document.getElementById('hours').innerHTML=Math.floor((olympicDate-currDate)%(1000*60*60*24)/(1000*60*60))+" hours";
    let minutes = document.getElementById('minutes').innerHTML = Math.floor((olympicDate - currDate) % (1000 * 60 * 60 * 24) % (1000 * 60 * 60)/(1000*60)) + " minutes";
    let seconds = document.getElementById('seconds').innerHTML = Math.floor((olympicDate - currDate) % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) % (1000 * 60)/(1000)) + " seconds";
    let milliseconds = document.getElementById('milliseconds').innerHTML = Math.floor((olympicDate - currDate) % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) % (1000 * 60) % (1000)) + " milliseconds";


}

setInterval(timing,1)