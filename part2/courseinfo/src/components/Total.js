import React from 'react'

const Total = ({parts}) => {

	const totalExercises = parts.reduce((s, p) => s+p.exercises, 0)
	// console.log('tt', totalExercises)
	return (
	  <div>
		<p><strong>Total of {totalExercises} exercises</strong></p>
	  </div>
	)
}

export default Total