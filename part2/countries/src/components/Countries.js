import {useEffect, useState} from 'react';
import axios from 'axios';

const CountryShort = ({country, setFilter}) => <div>{country.name.common} <button onClick={() => setFilter(country.name.common)}>show</button></div>;

const CapitalWeather = ({capital, country}) => {
  const [weather, setWeather] = useState();
  const api_key = process.env.REACT_APP_API_KEY

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital},${country}&units=metric&appid=${api_key}`)
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => console.log(error))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[capital, country])

  if (weather) {
    return (
      <div>
        <h2>Weather in {capital}</h2>
        <div>temperature {weather.main.temp} celsius</div>
        <div><img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}></img></div>
        <div>wind {weather.wind.speed} m/s</div>
      </div>
    ) 
  }
  return
}

const CountryDetails = ({country}) => {
  const keys = Object.keys(country.languages);
  const countryName = country.name.common;
  const countryCapital = country.capital[0];
  return (
    <div>
      <h1>{countryName}</h1>
      <div>capital {countryCapital}</div>
      <div>area {country.area}</div>
      <h2>Languages</h2>
      <ul>
        {keys.map((key) => <li key={key}>{country.languages[key]}</li>)}
      </ul>
      <img src={country.flags.png} alt='flag'></img>
      <CapitalWeather country={country.cca2} capital={countryCapital} />
    </div>
  )
}

const Countries = ({countries, filter, setFilter}) => {
  const filteredCountries = countries?.filter((country) => 
    (country.name.common.toLowerCase().includes(filter.toString().toLowerCase())));
  
  if (filteredCountries.length > 10) {
    return (<div>Too many matches, specify another filter.</div>)
  }
  if (filteredCountries.length < 1) {
    return (<div>No matches, specify another filter.</div>)
  }
  if (filteredCountries.length === 1) {
    let country = filteredCountries[0];
    return (<CountryDetails country={country} />)
  }
  return (
    filteredCountries.map(
        (country) => <CountryShort key={country.name.official} country={country} setFilter={setFilter} />)
  )
}

export default Countries;