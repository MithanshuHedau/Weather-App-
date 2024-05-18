const input=document.querySelector("#input-box");
const btn=document.querySelector("#search button");
const image=document.querySelector(".weather-icon");
const myh5=document.querySelector(".weather h5");

const apikey="a022f72ea505715efcc711ed4a1e89e0";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkweather(city){
    
    const response=await fetch(apiurl +city + `&appid=${apikey}`);
    var data=await response.json();

    console.log(data)   ;
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.floor(data.main.temp)+" °c";
    document.querySelector(".humidity").innerHTML=data.main.humidity + " %";
    document.querySelector(".wind").innerHTML=data.wind.speed+"   km/hr";

    // now update image for weather 
    if(data.weather[0].main=="Clouds"){
        image.src="clouds.png";
        myh5.innerHTML="Clouds"
    }   
    else if(data.weather[0].main=="Clear"){
        image.src="clear.png";
        myh5.innerHTML="Sunny"

    }
    else if(data.weather[0].main=="Rain"){
        image.src="rain.png";
        myh5.innerHTML="Rain"

    }
    else if(data.weather[0].main=="Drizzle"){
        image.src="drizzle.png";
        myh5.innerHTML="Drizzle"

    }
    else if(data.weather[0].main=="Mist"){
        image.src="mist.png";
        myh5.innerHTML="Mist"

    }
    else{
        image.src="clear.png";
        myh5.innerHTML="Sunny"
    }
}

btn.addEventListener("click",function(city){
    checkweather(input.value);
})