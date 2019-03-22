// init weather object
const weather = new Weather('Boston' , 'MA');
// init  ui
const ui =  new UI();
//weather.changeLocation('Miami','FL');
//Get weather on Dom load
document.addEventListener('DomContentLoaded' , getWeather);

function getWeather(){
weather.getWeather()
.then(results => {
  ui.paint(results);
})
.catch(err => console.log(err));
}