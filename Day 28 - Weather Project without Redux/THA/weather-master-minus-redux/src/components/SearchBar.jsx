
import { useState } from "react";

import WeatherCard from "./WeatherCard";
import "./Loader.scss";


const SearchBar = () => {

    const [autocompleteData, setAutoCompleteData] = useState([]);
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState({});
    const [isLoading, setIsLoading] = useState(false);


    async function getAutocompleteData(inputString) {

        const response = await fetch(`http://api.weatherapi.com/v1/search.json?key=fe8b857984734588ac785420213107&q=${inputString}`);
        const JSONResponse = await response.json();
        setAutoCompleteData(JSONResponse);
        
    }

    async function getWeatherData(location) {
        
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key= fe8b857984734588ac785420213107&q=${location}&aqi=yes`);
        const JSONResponse = await response.json();
        console.log(JSONResponse);
        setWeatherData(JSONResponse);
        setIsLoading(false);
    }


    return(
        <div className="SearchBar">
            
            <input className="text-field"
                   onChange={event => {
                       setCity(event.target.value);
                       if(event.target.value === "")
                        getAutocompleteData("a");
                       else
                        getAutocompleteData(event.target.value); }} 
                    value={city}
                    autoFocus={true}/>

            <button
                onClick={() => {
                    setIsLoading(true);
                    getWeatherData(city);
                    setAutoCompleteData([]);
                    setCity("");
                }}>SEARCH</button>
        
            <div className="search-result-container">
                
                {
                    autocompleteData.length === 0 && isLoading
                        ? <div className="search-result">No results matched.</div>
                        : autocompleteData.map(element => <div className="search-result"
                                                            key={element.id} 
                                                            onClick={() => setCity(element.name)}>
                                                                {element.name}
                                                        </div>)  
                }

                {
                    isLoading ? <div className="infinity-9"></div> : Object.keys(weatherData).length === 0 ? null : <WeatherCard data={weatherData}/>

                }

            </div>
            
        </div>
    );
};

export default SearchBar;