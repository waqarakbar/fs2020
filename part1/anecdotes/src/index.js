import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  
  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState({
    0: 0, 1:0, 2:0, 3:0, 4:0, 5:0
  })

  const nextAnnecdote = () => {
    setSelected(generateRandomNumber())
  }

  const generateRandomNumber = () => {
    let randomKey = Math.floor((Math.random() * props.anecdotes.length) + 0)
    while(randomKey === selected){
      randomKey = Math.floor((Math.random() * props.anecdotes.length) + 0)
    }
    return randomKey
  }

  const voteAnnecdote = () => {
    let votesCopy = {...votes}
    // console.log('copy', votesCopy)
    votesCopy[selected] += 1
    setVotes(votesCopy)
  }

  // console.log(selected)
  // console.log(votes)

  const votesCopy = {...votes}
  const maxVotesKey = Object.keys(votesCopy).reduce(function(a, b){ return votesCopy[a] > votesCopy[b] ? a : b });
  // console.log('max votes key', maxVotesKey)

  return (
    <div>
      {props.anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <Button text="Next Annecdote" clickHandle={nextAnnecdote} />
      <Button text="Vote" clickHandle={voteAnnecdote} />
      <h2>Annecdote with highest votes</h2>
      {props.anecdotes[maxVotesKey]}
      <p>has {votes[maxVotesKey]} votes</p>
    </div>
  )
}



const Button = ({text, clickHandle}) => {
  return (
    <div>
      <button onClick={clickHandle}>{text}</button>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
