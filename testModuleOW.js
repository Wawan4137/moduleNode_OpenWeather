let {OpenWeatherMap} = require('./index.js');
let ow = new OpenWeatherMap('4f0a617801307dff29818221b0b00742', 'metric');

ow.getWeather('Tours').then(data => {
    console.log('Temp:', data.main.temp);
}).catch(err => {
    console.log('Error while retrieving API data')
})