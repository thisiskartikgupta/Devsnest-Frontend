
const WeatherCard = props => {

    let weatherData = props.data.current;
    let locationData = props.data.location;

    console.log(weatherData);
    console.log(locationData);

    return(
        <div>
            <div>
                <img src={weatherData.condition.icon} alt={weatherData.condition.text}/>
                <div>{weatherData.condition.text}</div>
            </div>

            <div>
                <div>{locationData.name}, {locationData.region}, {locationData.country} </div>
                <div>{locationData.lat}&#176; {locationData.lon}&#176;</div>
            </div>

            <div>{weatherData.temp_c}<sup>&#176;C</sup></div>

            <div>
                <div>PM2.5</div>
                <div>{weatherData.humidity}%</div>
            </div>
            
            <div>{weatherData.wind_kph}kph</div>
            <div>{weatherData.wind_degree}&#176;</div>
            
            <div>
                <div>PM2.5</div>
                <div>{Number(weatherData.air_quality.pm2_5).toFixed(2)}</div>
            </div>

            <div>
                <div>PM10</div>
                <div>{Number(weatherData.air_quality.pm10).toFixed(2)}</div>
            </div>
            
        </div>
    );
};

export default WeatherCard;