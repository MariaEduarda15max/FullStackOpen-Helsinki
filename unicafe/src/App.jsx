import { useState } from "react"

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])


  const handleGoodClick = () => {
    setAll(allClicks.concat('Good'))
    setGood(good + 1)
  }


  const handleNeutralClick = () => {
    setAll(allClicks.concat('Neutral'))
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setAll(allClicks.concat('Bad'))
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleGoodClick}>Good</button>
      {good}
      <button onClick={handleNeutralClick}>neutral</button>
      {neutral}
      <button onClick={handleBadClick}>Bad</button>
      {bad}
      <p>{allClicks.join(' ')}</p>
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