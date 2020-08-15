import React, { useState } from 'react'
import Person from './components/Person'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [search, setSearch] = useState('')


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
      <div>filter shown with <input value={search} onChange={handleSearchChange}/></div>
      <h2>Add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map((person, i) => <Person key={person.name} person={person} />)}
    </div>
  )
}

export default App
