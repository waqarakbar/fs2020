import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/persons'
import Notification from './components/Notification'
import NotificationError from './components/NotificationError'


const App = () => {
  
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState(null)
  const [messageError, setMessageError] = useState(null)

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


  useEffect(() => {
    // console.log('effect')
    personService
    .getAll()
    .then(initialPersons => {
      // console.log('promis fulfilled')
      setPersons(initialPersons)
    })
  }, [])

  // console.log(persons);

  const handleSubmit = (e) => {
    e.preventDefault()
    // check if the newName already exist
    const personExists_r = persons.filter(person => person.name.toLowerCase() === newName.toLowerCase())
    if(personExists_r.length > 0){
      const personExists = {...personExists_r[0]}
      // console.log(personExists);
      if(window.confirm(`${newName} is already added to phonebook, replace the older number with the new one?`)){
        const updatedPersonObj = {...personExists, number:newNumber}
        // console.log('updated', updatedPersonObj);
        personService
        .update(personExists.id, updatedPersonObj)
        .then(res => {
          setPersons(persons.map(p => p.id === personExists.id ? res : p))
          setNewName('')
          setNewNumber('')
          
          setMessage(`Contact number of ${res.name} has been updated to ${res.number}`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)

        }).catch(error => {
          setMessageError('This contact has already been deleted')
          setTimeout(() => {
            setMessageError(null)
          }, 5000)
          setPersons(persons.filter(p => p.id !== personExists.id))
        })
      }
    }else{
      const newPersonObj = {
        name: newName,
        number: newNumber
      }
      personService
      .create(newPersonObj)
      .then(newPerson => {
        setPersons(persons.concat(newPerson))

        setMessage(`New contact of ${newPerson.name} has been saved`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)

      })
    }
    setNewName('')
    setNewNumber('')
  }

  const deletePerson = (id) => {
    const thisPerson = persons.find(p => p.id === id)
    // console.log(thisPerson)
    if(window.confirm(`Delete ${thisPerson.name}?`)){
      personService
      .deletePerson(id)
      .then(res => {

        setMessage(`${thisPerson.name} has been deleted`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)

        setPersons(persons.filter(p => p.id !== id))
      })
    }

    
	}
  
  // console.log(persons)
  const filteredPersons = (search.length > 0) ? persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase())) : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <NotificationError message={messageError} />
      <Filter search={search} handleSearchChange={handleSearchChange}/>
      
      <h2>Add a new</h2>
      <PersonForm handleSubmit={handleSubmit} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>
      <Persons persons={filteredPersons} deletePerson={deletePerson} />

    </div>
  )
}

export default App
