// el header muestra el nombre del curso
const Header = (props) => {
  return (
  <h1>{props.course}</h1> 
  )
}

// content muestra cada parte haciendo referencia a la propiedad name y la propiedad exercises
const Content = (props) => {
  return (
    <div>
      <Part name={props.part1.name} exercises={props.part1.exercises} />
      <Part name={props.part2.name} exercises={props.part2.exercises} />
      <Part name={props.part3.name} exercises={props.part3.exercises} />
    </div>
  )
}

// muestra la suma total de los ejercicios 
const Total = (props) => {
  return (
  <p>Total exercises {props.total} </p> 
  )
}

// la constante Part hace referencia a una sola parte del curso que es nombre mas ejercicios 
const Part = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
    // recibe name y exercises y luego los imprime
  )
}

const App = () => {
  // const-definitions
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data consists of ',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component consists of ',
    exercises: 14
}
  
  return (
    <div>
      <Header course={course} />
      <Content 
      part1 = {part1}
      part2 = {part2}
      part3 = {part3}
      />
      <Total total = {part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )


}

export default App