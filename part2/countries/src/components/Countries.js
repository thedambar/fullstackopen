const CountryShort = ({country, setFilter}) => <div>{country.name.common} <button onClick={() => setFilter(country.name.common)}>show</button></div>;

const CountryDetails = ({country}) => {
  const keys = Object.keys(country.languages);
  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>capital {country.capital[0]}</div>
      <div>area {country.area}</div>
      <h2>languages</h2>
      <ul>
        {keys.map((key) => <li key={key}>{country.languages[key]}</li>)}
      </ul>
      <img src={country.flags.png} alt='flag'></img>
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