import React from 'react';

const Person = ({person}) => {

	// console.log('person->', person)

	return (
		<div>{person.name} {person.number}</div>
	)
}

export default Person