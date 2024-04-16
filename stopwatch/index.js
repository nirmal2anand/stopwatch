const display =document.getElementById("display");
let timer= null;
let starttime=0;
let elapsedtime =0;
let isrunning =false;

function start(){
 if(!isrunning){
    starttime = Date.now() - elapsedTime;
    timer =setInterval(update, 10);
    isrunning =ture;

 }
}

function stop(){
 id (isrunning)
 {
    clearInterval(timer);
    elapsedtime =Date.now() -starttime;
    isrunning =false;
 }
}

function update(){
 const currenttime = Date.now();
 elapsedtime =currenttime - starttime;

let hours = Math.floor (elapsedtime/( 1000 * 60 * 60));
let minutes = Math.floor(elapsedtime /( 1000 * 60) % 60);
let seconds =Math.floor(elapsedtime /1000 % 60);
let milisecond =Math.floor(elapsedtime %1000 /10 );
   
 hours = String(hours).padStart(2, "0");
 minutes = String(minutes).padStart(2, "0")
 seconds = String(seconds).padStart(2, "0");;
 milisecond = String(milisecond).padStart(2, "0");



display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`
}