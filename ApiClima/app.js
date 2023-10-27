const UrlBase = "https://api.openweathermap.org/data/2.5/weather";
const ApiKey = "09dcfcc05a3c4c4c2af21ca930ac43c0";
const btnCiudad = document.querySelector('#btnCiudad');
const inputCity = document.querySelector('#city')

const fetchApi = url => fetch (url).then(Response =>Response.json());

async function getClima (lat,lon,apiKey){
    const url = `${UrlBase}?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const clima = await fetchApi(url);
    console.log(clima);
    const temperature =(clima.main.temp - 273.15).toFixed(2);
    document.querySelector('#left h2').innerHTML = clima.name;
    pintaFondo(temperature);
    pintaTemp(temperature);
}

async function getClimaByCity(city,apiKey){
    const url= `${UrlBase}?q=${city}&appid=${apiKey}`;
    const clima = await fetchApi(url);
    console.log(clima);
    const temperature =(clima.main.temp - 273.15).toFixed(2);
    document.querySelector('#left h2').innerHTML = clima.name;
    pintaFondo(temperature);
    pintaTemp(temperature);
}

function pintaTemp(temp){
    const h3 = document.querySelector('h3');
    if (temp <15){
        h3.innerHTML = `${ temp }°C ❄`;
    }else if (temp <23){
        h3.innerHTML= `${temp}°C🌤`;
    }else{
        h3.innerHTML = `${temp}°C☀`;
    }
}

function pintaFondo(temp){
    const fondo = document.querySelector('body');
    if (temp < 15){
        fondo.style.background = '#a8f3da';
    }else if (temp < 22){
        fondo.style.background ='#FFFF88';
    }else{
        fondo.style.background="#cb4830"
    }
}
navigator.geolocation.getCurrentPosition(
    position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getClima(lat,lon,ApiKey);
    }
)

btnCiudad.addEventListener ('click',() =>{
    const city = inputCity.value;
    if(city){
        getClimaByCity(city,ApiKey);
    }
})
