import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => {
    setGood(good+1)
  }

  const neutralClick = () => {
    setNeutral(neutral+1)
  }

  const badClick = () => {
    setBad(bad+1)
  }

  return (
    <div>
      <h1>Give geedback</h1>
      <Button clickEvent={goodClick} text='good' />
      <Button clickEvent={neutralClick} text='neutral' />
      <Button clickEvent={badClick} text='bad' />

      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}


const Button = ({clickEvent, text}) => {
  return (
    <button onClick={clickEvent}>{text}</button>
  )
}

const Statistics = (props) => {

  const {good, neutral, bad} = props

  let total = good+neutral+bad
  
  // the positive percentage
  let positive = 0
  if(good !== 0){
    positive = good*100/total
  }

  // average score
  let avgScore = ((good*1)+(neutral*0)+(bad*-1))/total

  if(total > 0){
    return (
      <div>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
        <p>All {total}</p>
        <p>Average {avgScore}</p>
        <p>Positive {positive} %</p>
      </div>
    )
  }else{
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
