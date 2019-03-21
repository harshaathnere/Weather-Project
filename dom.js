// init weather object
const weather = new Weather('Boston' , 'MA');
//weather.changeLocation('Miami','FL');
//Get weather on Dom load
document.addEventListener('DomContentLoaded' , getWeather);

function getWeather(){
weather.getWeather()
.then(results => {
    console.log(results);
})
.catch(err => console.log(err));
}