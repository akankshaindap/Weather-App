const apiKey='8127b0a8a291d3c666cba114a0b308d1'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q='
const searchBox= document.querySelector('.search input')
const searchBtn= document.querySelector('.search img')
const weatherIcon=document.querySelector('.weather-icon')
const cardColor=document.querySelector('.card')



async function checkWeather(city){
    const response=await fetch (apiUrl + city +`&appid=${apiKey}`);
    if (response.status==404){
        document.querySelector('.error').style.display='block'
    }
    else{
        var data=await response.json();
        console.log(data)
        document.querySelector('.name').innerHTML=data.weather[0].main

        document.querySelector('.city').innerHTML=data.name
        document.querySelector('.humidity').innerHTML=data.main.humidity    +' %'
        document.querySelector('.wind').innerHTML=data.wind.speed +'km/h'
        document.querySelector('.temp').innerHTML=Math.round(data.main.temp) + `&#8451`
   

        if(data.weather[0].main=='Clouds'){
           cardColor.style.background='linear-gradient(135deg,#dddc9a,#addaeb)'
            weatherIcon.src="assets/clouds.png"
        }
        else if(data.weather[0].main=='Clear'){
            cardColor.style.background='linear-gradient(135deg,#9addda,#addaeb)'
    
            weatherIcon.src="/assets/clear.png"
        }
        else if(data.weather[0].main=='Smoke'){
            cardColor.style. background='linear-gradient(135deg,#7c807f,#cde6e0)'
    
            weatherIcon.src="/assets/smoke.png"
        }
        else if(data.weather[0].main=='Drizzle'){
            cardColor.style.background='linear-gradient(135deg,#90d3cd,#3294a1 )'
    
            weatherIcon.src="assets/drizzle.png"
        }
        else if(data.weather[0].main=='Mist'){
            cardColor.style.background='linear-gradient(135deg,#ccc5e7,#d2e6e9)'
    
            weatherIcon.src="/assets/mist.png"
        }
        else if(data.weather[0].main=='Rain'){
            cardColor.style.background='linear-gradient(135deg,#4e7677,#85a1bb)'
            weatherIcon.src="/assets/rain.png"
        }
        else if(data.weather[0].main=='Snow'){
            cardColor.style.background='linear-gradient(135deg,#d0ecee,#cbe0f5)'
    
            weatherIcon.src="/assets/snow.png"
        }
        document.querySelector('.weather').style.display="block";
        document.querySelector('.error').style.display='none'
    }
    }
   
searchBtn.addEventListener('click' ,()=>{
    checkWeather(searchBox.value); 
});
searchBox.addEventListener('keypress',(e)=>{
    if(e.key==='Enter'){
        e.preventDefault();
        checkWeather(searchBox.value)

    }
})
