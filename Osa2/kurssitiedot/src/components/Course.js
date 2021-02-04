import React from 'react'

const Header = (props) => (
    <>
      <h2>{props.courseName}</h2>
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

export default Course