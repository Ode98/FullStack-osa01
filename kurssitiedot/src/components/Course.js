import React from 'react'

const Course = (props) => {
  return (
    <div>
      <Header course = {props.course.name}/> 
      <Content parts = {props.course.parts}/>
      <Total parts = {props.course.parts}/>
    </div>
  )
}

const Header= (props) => {
  return (
    <div>
      <h2> {props.course} </h2>
    </div>
  )
}

const Total= (props) => { 

  const exercises = props.parts.map(part => part.exercises)
  const totalParts = exercises.reduce((s, p) => s + p);

  return (
    <div>
      <h4>Total of {totalParts} exercises</h4>
    </div>
  )
}

const Content= (props) => {
  const parts = props.parts
  return (
    <div>
      {parts.map((part, i) => 
        <p key={i}>
          {part.name} {part.exercises}
        </p>
      )}
    </div>
  )
}


export default Course
