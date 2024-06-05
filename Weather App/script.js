const apikey = "33c389c55060c5df535d8058828ef5d3"
const url= "https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox = document.querySelector(".search input")

const searchBtn = document.querySelector(".search button")

const WeatherIcon = document.querySelector(".Weather-icon")
 async function checkweather(city) {
    const response = await fetch(`${url}${city}&appid=${apikey}`);
   //  (url + city + `&appid=${apikey}`)
    var data = await response.json()
      console.log(data)
    if(response.status==404){
          document.querySelector(".error").style.display="block"
          document.querySelector(".Weatrher").style.display="none"
          
    }
    else{
    
    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp/9) + "°c" ;
    document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
    document.querySelector(".wind").innerHTML= data.wind.speed + "km/h";
    
      if(data.weather[0].main == "Clouds")
        {
         WeatherIcon.src= "images/clouds.png"
        }
     else if(data.weather[0].main == "Clear")
        {
            WeatherIcon.src= "images/sunny.png"
           }
     else if(data.weather[0].main == "Rain")
        {
            WeatherIcon.src= "images/Rain.png"
           }
     else if(data.weather[0].main == "Haze")
        {
            WeatherIcon.src= "images/clouds.png"
           }
     else if(data.weather[0].main == "Mist")
        {
            WeatherIcon.src= "images/clouds.png"
           }
           console.log(data.weather[0].main)
           document.querySelector(".Weather").style.display = "block"
           document.querySelector(".error").style.display="none"
        }
 } 
 searchBtn.addEventListener("click", () => {
      // Get the value from the search box
      checkweather(searchBox.value); // Pass the city name to the function
  });
  

