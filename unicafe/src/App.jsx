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

const Statistics = (props) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {all}</p>
      <p>Average: {average}</p>
      <p>Positive: {positive} %</p>
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
      Good = {good}<hr />
      Neutral = {neutral}<hr />
      Bad = {bad}<hr />
      All={all} <hr />
      Average={average}<hr />
      Positive={positive}<hr />
      </fieldset>
    </div>
    )
}

export default App

