import React from 'react';

const Person = ({person}) => {

	// console.log('person->', person)
	
	return (
		<div>{person.name}</div>
	)
}

export default Person