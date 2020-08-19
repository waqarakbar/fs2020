import React from 'react'
import Person from './Person'

const Persons = ({persons, deletePerson}) => {

	// console.log('person->', person)

	return (
		<div>
			{persons.map((person, i) => <Person key={person.name} person={person} deletePerson={deletePerson} />)}
		</div>
	)
}

export default Persons