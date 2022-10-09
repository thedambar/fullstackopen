import { useState, useEffect } from 'react';
import Countries from './components/Countries';
import CountryFilter from './components/CountryFilter';
import axios from 'axios';

const App = () => {

  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState([]);


  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  return (
    <div>
      <CountryFilter filter={filter} setFilter={setFilter} />
      <Countries countries={countries} filter={filter} setFilter={setFilter}/>
    </div>
  )
}

export default App;