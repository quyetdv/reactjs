import React from "react";

const Course = props => (
  <>
    <Header header={props.courses}></Header>
    <Content content={props.courses.parts}></Content>
  </>
)
const Header = props => <h1>{props.header.name}</h1>
const Content = props => (
  <>
    {props.content.map(content => 
      <Part key={content.id} part={content}></Part>
      
    )}
    <b>total of {props.content.reduce((total, num) => total + num.exercises,0)} exercises</b>
  </>
)
const Part = props => <p>{props.part.name} {props.part.exercises}</p>
const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2
        }
      ]
    }
  ];

  return (
      <div>
          {
            courses.map(courses => 
                <Course key={courses.id} courses={courses}></Course>
            )
          }
          
      </div>
    
  )

}

export default App;
