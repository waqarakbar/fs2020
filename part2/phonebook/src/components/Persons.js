import React from 'react';
import Person from './Person'

const Persons = ({persons}) => {

	// console.log('person->', person)

	return (
		<div>
			{persons.map((person, i) => <Person key={person.name} person={person} />)}
		</div>
	)
}

export default Persons