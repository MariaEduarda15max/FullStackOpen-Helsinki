import { captureOwnerStack } from "react"
import { useState } from "react"



const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const StatisticLine = ({ text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.all === 0) {
    return <p>No Feedback given</p>
  }

  return (
    <div>
      <StatisticLine text="good" value= {props.good} />
      <StatisticLine text = "Neutral" value = {props.neutral} />
      <StatisticLine text = "Bad" value = {props.bad} />
      <StatisticLine text = "All" value = {props.all} />
      <StatisticLine text = "Average" value = {props.average} />
      <StatisticLine text = "Positive" value = {props.positive + " %"} />
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // + estadisticas
  const all = good + neutral + bad 
  const average = all === 0 ? 0 : (good - bad) / all
  const positive = all === 0 ? 0 : (good / all) * 100

  return (
    <div>
      <h1>Give Feedback</h1>
      <fieldset>
      <button onClick = {() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      </fieldset>
      <h1>Statistics</h1>
      <fieldset>
      <Statistics 
  good={good}
  neutral={neutral}
  bad={bad}
  all={all}
  average={average}
  positive={positive}
/>
      </fieldset>
    </div>
    )
}

export default App

