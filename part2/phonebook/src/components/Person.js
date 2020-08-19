import React from 'react';

const Person = ({person, deletePerson}) => {

	// console.log('person->', person)

	return (
		<div>
			{person.name} {person.number} 
			<button onClick={() => deletePerson(person.id)}>Delete</button>
		</div>
	)
}

export default Person