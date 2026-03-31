// el header muestra el nombre del curso
const Header = (props) => {
  return (
  <h1>{props.course}</h1> 
  )
}

// content muestra cada parte haciendo referencia a la propiedad 
// name y la propiedad exercises
const Content = (props) => {
  return (
    <div>
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )
}

// muestra la suma total de los ejercicios 
const Total = (props) => {
  return (
  <p>Total exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} </p> 
  )
}

// la constante Part hace referencia a una sola parte del curso que
//  es nombre mas ejercicios, recibe las propiedades name y exercises
//y luego las imprime
const Part = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}

const App = () => {
  // array de objetos
  const course = 'Half Stack application development'
  const parts = [
    {
    name: 'Fundamentals of React',
    exercises: 10
    },
    {
    name: 'Using props to pass data consists of ',
    exercises: 7
    },
    {
    name: 'State of a component consists of ',
    exercises: 14
    }
  ]
  // en esta parte eliminamos el contenido extra de las lineas 54,
  //  55 y 56 porque ahora solo es necesario hacer referencia a cada 
  // parte dentro de los corchetes ya que sus propiedades estan dentro
  //  de cada objeto y no es necesrio llamarlas por separado
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts = {parts} />
    </div>
  )


}

export default App