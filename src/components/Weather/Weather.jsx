import React from "react";
import './weather.css'
import axios from "axios";

const Weather = () => {
    const [query,setQuery] = React.useState('')
    const [weather,setWeather] = React.useState({})
    const options = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/weather',
        params: {
            q: `${query}`,
            lang: 'ru',
            units: 'metric',
            mode: 'xml, html'
        },
        headers: {
            'x-rapidapi-key': '66d20371b8msha04b4de8b409db7p187436jsnc079da3df2af',
        }
    };
    const search = event => {
        if (event.key === 'Enter'){
            axios.request(options).then( response => {
              setWeather(response.data)
                console.log(response.data)
            }).catch( error => {
                console.error(error)
            });
        }
    }
    const dateBuilder = (d) =>{
        const months = ['January','February','March','April','May',
            'June','July','August','September','October','December']
        const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        const day = days[d.getDay()]
        const month = months[d.getMonth()]
        const date = d.getDate()
        const year = d.getFullYear()
       return `${day} ${date} ${month} ${year}`
    }

    return (
        <div className='container'>
            <div className="weather">
                <div className="weather__row">
                    <div className="weather-search-box">
                        <input type="text" onChange={(event)=>{
                            setQuery(event.currentTarget.value)
                        }}
                               onKeyPress={search}
                               placeholder='Search...' className='weather__search-box__search'/>
                    </div>
                    {
                        typeof weather.main != 'undefined' ?
                    <div className="weather-data">
                        <div className="weather-data__location">{weather.name}, {weather.sys.country}</div>
                        <div className="weather-data__date">{dateBuilder(new Date())}</div>
                        <div className="weather-data__temp">{Math.round(weather.main.temp)}°c</div>
                        <div className="weather-data__weather">{weather.weather[0].description}</div>
                    </div>
                    : ''
                    }
                </div>
            </div>
        </div>
    );
}

export default Weather;