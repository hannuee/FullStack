import React from 'react'

const Header = (props) => (
  <>
    <h1>{props.courseName}</h1>
  </>
)

const Part = (props) => (
  <>
    <p>
       {props.part} {props.exercises}
    </p>
  </>
)

const Content = (props) => (
  <>
    {props.parts.map(part => <Part key={part.id} part={part.name} exercises={part.exercises} />)}
  </>
)

const Total = (props) => (
  <>
    <p><b>total of {props.parts.reduce((acc, cur) => acc + cur.exercises, 0)} exercises</b></p>
  </>
)

const Course = ({course}) => (
  <>
    <Header courseName={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </>
)

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App
