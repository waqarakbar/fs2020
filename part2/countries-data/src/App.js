import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CountriesList from './components/CountriesList'

const App = () => {

  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      // console.log(response.data)
      setCountries(response.data)
    })
  }, [])

  const filteredCountries = (search.length > 0) ? countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase())) : []
  
  return (
    <div>
      <p>find countries <input value={search} onChange={handleSearchChange}/></p>
      <div><CountriesList countries={filteredCountries} /></div>
    </div>
  )

}

export default App