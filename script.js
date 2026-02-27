function updateclock(){
    let time = new Date() // current time of System


let hours = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();

let date = time.getDate(); // 1,2,3,4 ..........;
let month = time.getMonth(); // Given Number from 1-12
let day = time.getDay(); // Given Number from 1-7
let year = time.getFullYear(); // 2025 ,2026,2034,2345 ......;

let months =[
    "January","Febuary","March","April","May","june"
    ,"July","August","September","October","November","December"
];
let days = [
    "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturady"
];

if(hours<10){
    hours = `0${hours}`;
}

if(minutes<10){
    minutes = `0${minutes}`;
}

if(seconds<10){
    seconds = `0${seconds }`
}

let clock = document.querySelector(".clock h1");
samay();

function samay(){
    clock.innerHTML = `${hours} : ${minutes} : ${seconds}`;
}

let dates = document.querySelector(".clock h3");
tarikh();

function tarikh(){
    dates.innerHTML = `${date}  ${ months[month]} ${year} || ${days[day]}`;
}
setTimeout(updateclock,1000);

}
updateclock();