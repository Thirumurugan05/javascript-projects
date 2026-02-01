// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=imperial


let api_key = `afa1d5c6c3863bc5bac058f25539de1b`;

getWeatherData=(city)=>{
    const url="https://api.openweathermap.org/data/2.5/weather";
    const full_url=`${url}?=${city}&appid=${api_key}&units=imperial`;
    const weatherPromise=fetch(full_url);
  
   
    return weatherPromise.then((response)=>{
        return response.json()
        
    })
   
}


function searchCity(){
    const city=document.getElementById("city-input").value;
    getWeatherData(city)
    .then((response)=>{
         showWeatherData(response)
    })
    .catch((err)=>{
           console.error(err)
    })
}

showWeatherData=(weatherData)=>{
    document.getElementById(`city-name`).innerText=weatherData.name;
    document.getElementById(`weather-type`).innerText=weatherData.weather[0].main;
    document.getElementById(`temp`).innerText=weatherData.main.temp;
    document.getElementById(`min-temp`).innerText=weatherData.main.temp_min;
    document.getElementById(`max-temp`).innerText=weatherData.temp_max;
}
showWeatherData()
