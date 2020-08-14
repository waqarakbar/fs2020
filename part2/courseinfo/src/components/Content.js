import React from 'react'
import Part from './Part'

const Content = ({parts}) => {
	// console.log(parts)
	return (
	  <div>
		{parts.map((part) => 
		  <Part key={part.id} part_title={part.name} num_exercises={part.exercises} />
		)}
	  </div>
	)
  }

  export default Content