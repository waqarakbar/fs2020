import React, { useState } from 'react'
import Person from './components/Person'


const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')


  const handleNameChange = (e) => {
    // console.log(e.target.value)
    setNewName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // check if the newName already exist
    const personExists = persons.filter(person => person.name === newName)
    
    if(personExists.length > 0){
      alert(`${newName} is already added to phonebook`)
    }else{
      const newPersonObj = {
        name: newName
      }
  
      setPersons(persons.concat(newPersonObj))
      setNewName('')
    }
    
  }
  
  // console.log(persons)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, i) => <Person key={person.name} person={person} />)}
    </div>
  )
}

export default App
