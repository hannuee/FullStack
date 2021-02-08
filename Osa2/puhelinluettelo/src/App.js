import React, { useState, useEffect } from 'react'
import axios from 'axios'

const FilterForm = ({search, handleSearchChange}) => (
  <div> filter shown with: <input value={search} onChange={handleSearchChange} /></div>
)

const NewPersonForm = ({addPerson, newName, handleNameChange, newNumber, handleNumberChange}) => (
  <form onSubmit={addPerson}>
    <div> name: <input value={newName} onChange={handleNameChange} /></div>
    <div> number: <input value={newNumber} onChange={handleNumberChange} /></div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
)

const PersonsList = ({personsToShow}) => (
  <>{personsToShow.map(person => <p key={person.name}>{person.name} {person.number}</p>)}</>
)

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')

  useEffect(() => { 
    axios
      .get('http://localhost:3001/persons')
      .then(response => setPersons(response.data))
    }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    if(persons.some(person => person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const personsToShow = (search === '') ? persons : persons.filter(person => person.name.toLowerCase().search(search.toLowerCase()) !== -1)
  
  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm search={search} handleSearchChange={handleSearchChange} />
      <h2>Add a new</h2>
      <NewPersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <PersonsList personsToShow={personsToShow} />
    </div>
  )

}

export default App
