import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text} {props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  const all = good + neutral + bad
  const average = (good - bad) /(good + neutral + bad)
  const positive = good / (good + neutral + bad) * 100 +' %'

  if (all > 0) {
    return (
      <table>
        <tbody>
          <StatisticLine text = "good" value = {good}/>
          <StatisticLine text = "neutral" value = {neutral}/>
          <StatisticLine text = "bad" value = {bad}/>
          <StatisticLine text = "all" value = {all}/>
          <StatisticLine text = "average" value = {average}/>
          <StatisticLine text = "positive" value = {positive}/>
        </tbody>
      </table>
    )
  } 
  return (
    <div>
      <p>No Feedback Given</p>
    </div>
  )
}

const App = (props) => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodRating = () => setGood(good + 1)
  const neutralRating = () => setNeutral(neutral + 1)
  const badRating = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give Feedback!</h1>
      <Button 
        handleClick = {goodRating}
        text = 'good'
      />
      <Button 
        handleClick = {neutralRating}
        text = 'neutral'
      />
      <Button 
        handleClick = {badRating}
        text = 'bad'
      />
      <h1>Statistics</h1>
      <Statistics
      good = {good}
      neutral = {neutral}
      bad = {bad}
      />

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))