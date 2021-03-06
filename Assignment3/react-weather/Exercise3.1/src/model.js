const model = (weatherdata, forecastdata, filter = () => true) => {
    const forecastMap = {}
    const weatherdataMap = {}
    forecastdata.forEach(e => forecastMap[e.place] = e)
    weatherdata.forEach(e => weatherdataMap[e.place] = e)

    const forecastData = () => forecastdata
        .map(p => ({ ...p, ...forecastMap[p.place]}))
        .filter(filter)

    const weatherData = () => weatherdata
        .map(p => ({ ...p, ...weatherdataMap[p.place]}))
        .filter(filter)
  
    const updateWeather = (data, forecast) => model(data, forecast)
    const updateWeatherData = p => model(p, forecastdata, filter)
    const updateForecastData = p => model(weatherdata,  p, filter)
    const addForecast = e => model( forecastdata.concat(e), filter)
    const addWeatherData = e => model(weatherdata.concat(e), forecastdata)
    const addForecastData = e => model( weatherdata, forecastdata.concat(e))
    
    const filtered = filter => model(weatherdata, forecastdata, filter)
    
    const all = () => model(weatherdata, forecastdata)
    return {addForecast, weatherData, updateWeather, updateForecastData, updateWeatherData, addForecastData,forecastData,addWeatherData, filtered, all }
}

export default model