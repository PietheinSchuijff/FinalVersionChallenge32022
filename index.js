var stad = "Amsterdam";

var urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${stad}&appid=0939815a668215cb206f50d9e975eca0`
var urlPopulation = `https://public.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-1000&q=${stad}&facet=timezone&facet=country`

let button = document.getElementById('clicker')
button.addEventListener('click', ()=> {
    stad = document.getElementById('city').value
    console.log(urlWeather)
    urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${stad}&appid=0939815a668215cb206f50d9e975eca0`
    urlPopulation = `https://public.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-1000&q=${stad}&facet=timezone&facet=country`
    getData()
    console.log(stad)
})

function getData() {



fetch(urlWeather)
    .then(response => response.text())
    .then(data => getWeatherData(data));


    function getWeatherData(data) {
    	
    	let newData = JSON.parse(data)
		console.log(newData)
		document.getElementById("cloud").innerHTML = newData.weather[newData.weather.length - 1].main
        document.getElementById("wind").innerHTML = newData.wind.speed
        console.log(newData.weather[0].main)
    }



fetch(urlPopulation)
    .then(response => response.text())
    .then(data => getPopulationData(data));


    function getPopulationData(data) {
    	
    	var newData = JSON.parse(data)
		console.log(newData)
		document.getElementById("lat").innerHTML = newData.records[newData.records.length - 1].fields.coordinates[0]
        document.getElementById("long").innerHTML = newData.records[newData.records.length - 1].fields.coordinates[1]
        // document.getElementById("timezone").innerHTML = newData.records.fields.timezone
    }

}

getData()




  	