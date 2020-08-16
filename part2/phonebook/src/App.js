import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import axios from 'axios'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log('promis fulfilled')
      setPersons(response.data)
    })
  }, [])

  console.log(persons);
  

  const handleNameChange = (e) => {
    // console.log(e.target.value)
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    // console.log(e.target.value)
    setNewNumber(e.target.value)
  }

  const handleSearchChange = (e) => {
    // console.log(e.target.value)
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // check if the newName already exist
    const personExists = persons.filter(person => person.name === newName)
    
    if(personExists.length > 0){
      alert(`${newName} is already added to phonebook`)
    }else{
      const newPersonObj = {
        name: newName,
        number: newNumber
      }
  
      setPersons(persons.concat(newPersonObj))
      setNewName('')
      setNewNumber('')
    }
    
  }
  
  // console.log(persons)
  const filteredPersons = (search.length > 0) ? persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase())) : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearchChange={handleSearchChange}/>
      
      <h2>Add a new</h2>
      <PersonForm handleSubmit={handleSubmit} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>
      <Persons persons={filteredPersons} />
    </div>
  )
}

export default App
