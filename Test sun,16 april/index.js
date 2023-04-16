const weatherApi = {
    key: "2fa73590fd8b5a4c6e68098ad5625395", 
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}
const searchInputBox = document.getElementById('input-box');
//Event Listener function on keypress
searchInputBox.addEventListener('keypress',
(event) =>{
    if(event.keyCode ==13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
    }
})
//Get Weather report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}
//Show Weather Report
function showWeatherReport(weather){
    console.log(weather);

let city = document.getElementById('city')
city.innerText =`${weather.name}, ${weather.sys.country}`;

let temp = document.getElementById('temp');
temp.innerHTML =`${Math.round(weather.main.temp)} &deg;C`;

let minMax =document.getElementById('min-max');
minMax.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

let weatherType = document.getElementById('weather');
weather.innertext =`${weather[0].main}`;

// let date = document.getElementById('date');
// let todayDate = new Date();
// date.innerText = dateManage(todayDate);


}
// Date manage
setInterval(updateTime, 1000);
function updateTime() {
    date.innerHTML = new Date();
}


// function dateManage(dateArg){
// let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// let year = dateArg.getfullyear();
// let month = months[date.Arg.getMonth()];
// let date = dateArg.getDate();
// let day = days[dateArg.getDay()];

// return `${date} ${month} ${day}, ${year}`;
// }