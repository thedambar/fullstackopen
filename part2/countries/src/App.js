import { useState, useEffect } from 'react';
import Countries from './components/Countries';
import CountryFilter from './components/CountryFilter';
import axios from 'axios';

const App = () => {

  const [countries, setCountries] = useState([]);
  const [pending, setPending] = useState(true)
  const [filter, setFilter] = useState([]);


  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
        setPending(false);
      })
      .catch(error => {
        console.log(error);
        setCountries([]);
        setPending(true);
      })
  }, [])

  if (pending) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <CountryFilter filter={filter} setFilter={setFilter} />
      <Countries countries={countries} filter={filter} setFilter={setFilter}/>
    </div>
  )
}

export default App;