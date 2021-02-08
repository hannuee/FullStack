import React, { useState, useEffect } from 'react'
import axios from 'axios'

const FilterForm = ({search, handleSearchChange}) => (
  <div> find countries <input value={search} onChange={handleSearchChange} /></div>
)

const CountriesList = ({countriesToShow}) => (
  <>{countriesToShow.map(country => <p key={country.name}>{country.name}</p>)}</>
)

const CountryInfo = ({country}) => (
  <>
    <h1>{country.name}</h1>
    <p>capital: {country.capital}</p>
    <p>population: {country.population}</p>

    <h1>Languages</h1>
    <ul> 
      {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
    </ul>

    <img src={country.flag} width="300" /> 
  </>
)

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ search, setSearch ] = useState('')

  useEffect(() => { 
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => setCountries(response.data))
    }, [])

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const countriesToShow = countries.filter(country => country.name.toLowerCase().search(search.toLowerCase()) !== -1)
  
  if(search === ''){
    return (
      <div>
        <FilterForm search={search} handleSearchChange={handleSearchChange} />
      </div>
    )
  }
  else if(countriesToShow.length > 10){
    return (
      <div>
        <FilterForm search={search} handleSearchChange={handleSearchChange} />
        <p>Too many matches, specify another filter</p>
      </div>
    )
  } else if(10 >= countriesToShow.length && countriesToShow.length > 1){
    return (
      <div>
        <FilterForm search={search} handleSearchChange={handleSearchChange} />
        <CountriesList countriesToShow={countriesToShow} />
      </div>
    )
  } else if(countriesToShow.length === 1){
    console.log('heips')
    return (
      <div>
        <FilterForm search={search} handleSearchChange={handleSearchChange} />
        <CountryInfo country={countriesToShow[0]} />
      </div>
    )
  } else {
    return (
      <div>
        <FilterForm search={search} handleSearchChange={handleSearchChange} />
        <p>No matches</p>
      </div>
    )
  }

}

export default App
