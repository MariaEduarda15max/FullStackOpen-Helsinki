const Header = (props) => {
  return (
  <h1>{props.course}</h1> 
  )
}

const Content = (props) => {
  return (
    <div>
      <p>{props.part1} {props.excercises1}</p>
      <p>{props.part2} {props.excercises2}</p>
      <p>{props.part3} {props.excercises3}</p>
    </div>
  )
}

const Total = (props) => {
  return (
  <p>{props.totalExcercises} {props.total} </p>
  )
}

const App = () => {
  // const-definitions
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React consists of '
  const exercises1 = 10
  const part2 = 'Using props to pass data consists of '
  const exercises2 = 7
  const part3 = 'State of a component consists of '
  const exercises3 = 14
  const totalExcercises = 'The number of excercises of each part is: '
  return (
    <div>
      <Header course={course} />
      <br />
      <Content 
      totalExcercises = {totalExcercises}
      part1 = {part1} excercises1 = {exercises1}
      part2 = {part2} excercises2 = {exercises2} 
      part3 = {part3} excercises3 = {exercises3}
      />
      <Total totalExcercises = {totalExcercises} total={exercises1 + exercises2 + exercises3} />
    </div>
  )


}

export default App