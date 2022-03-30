const { response } = require("express");

const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');

const getInfo = (event) => {
    event.preventDefault();
    let cityVal = cityName.Value;

    if(cityVal=== ""){
        city_name.innertText = `Please enter your city`;

    } else {
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=d75577fab323b32a76d8a546b780b216`;
            const response = await fetch(url);
            const data  = await response.json();
            const arrData = [Data];

            temp.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;
        }
        catch{
            city_name.innerText - 'plz enter correctly';
            
        }
    }
    


}
submitBtn.addEventListener('click', getInfo);