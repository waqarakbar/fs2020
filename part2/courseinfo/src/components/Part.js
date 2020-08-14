import React from 'react'

const Part = (props) => {
	return (
	  <div>
		<p>{props.part_title} {props.num_exercises}</p>
	  </div>
	)
  }

  export default Part