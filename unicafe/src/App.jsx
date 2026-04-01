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
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)


  const handleGoodClick = () => {
    setAll(allClicks.concat('Good'))
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood + neutral + bad)
  }


  const handleNeutralClick = () => {
    setAll(allClicks.concat('Neutral'))
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(good + updatedNeutral + bad)
  }
  const handleBadClick = () => {
    setAll(allClicks.concat('Bad'))
    const updatedBad = bad + 1
    setBad(updatedBad)
    setTotal(good + neutral + updatedBad)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleGoodClick} text='Good'>Good</button>
      {good}
      <button onClick={handleNeutralClick} text='neutral'>Neutral</button>
      {neutral}
      <button onClick={handleBadClick} text='Bad'>Bad</button>
      {bad}
      <p>{allClicks.join(' ')}</p>
      <History allClicks={allClicks} />
    </div>
    )
}

export default App


// const Display = props => <div>{props.value}</div>

// const Button = (props) => (
//   <button onClick={props.onClick}>
//     {props.text}
//   </button>
// )

// const App = () => {
//   const [value, setValue] = useState(10)
  
// const setToValue = newValue => {
//   console.log('value now', newValue) //print the new value to console
//   setValue(newValue)
// }


//   return (
//     <div>
//       <Display value={value} />
//       <Button onClick={() => setToValue(1000)} text="thousand" />
//       <Button onClick={() => setToValue(0)} text="reset" />
//       <Button onClick={() => setToValue(value + 1)} text="increment" />
//     </div>
//   )
// }

// export default App