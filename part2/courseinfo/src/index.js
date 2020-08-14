import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  // console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part_title} {props.num_exercises}</p>
    </div>
  )
}

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

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.parts[0].exercises + props.parts[0].exercises + props.parts[0].exercises}</p>
    </div>
  )
}


const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}

const App = () => {
  
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Another testing component',
        exercises: 6,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'))