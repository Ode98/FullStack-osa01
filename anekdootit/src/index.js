import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Display = (props) => {
  return(
    <div>
      <p>{anecdotes[props.index]}</p>
      <p>has {props.votes} votes</p>
    </div>
  )
}

const App = () => {

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length))
  const randomAnecdote= () => setSelected(random)
  const [mostVoted, setMostVoted] = useState(0)

  const vote = () => {
    const copyPoints = [...points]
    copyPoints[selected] += 1
    setPoints(copyPoints)
    setMostVoted(copyPoints.indexOf(Math.max(...copyPoints)))
    console.log(copyPoints)
  } 
  
  return (
    <div>
      <h1>Anecdote Of The Day</h1>
        <Display 
          index = {selected}
          votes = {points[selected]}
        />
        <Button handleClick = {vote} text = 'vote'/>
        <Button handleClick = {randomAnecdote} text = 'random'/>
      <h1>Anecdote with the most votes</h1>
        <Display
          index = {mostVoted}
          votes =  {points[mostVoted]}
        />
    </div>
  ) 
}

const random = () => {
  const num = Math.floor(Math.random() * anecdotes.length);
  return(num)
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