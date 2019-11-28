import React from "react";

const Course = props => (
  <>
    <Header header={props.course}></Header>
    <Content parts={props.course.parts}></Content>
  </>
);
const Header = props => <h1>{props.header.name}</h1>;
const Content = props => {
  const parts = props.parts;
  return (
    <>
      {parts.map(element => (
        <Part
          key={element.id}
          name={element.name}
          exercises={element.exercises}
        ></Part>
      ))}
      <b>
        total of {parts.reduce((total, part) => total + part.exercises, 0)}{" "}
        exercises
      </b>
    </>
  );
};
const Part = props => (
  <p>
    {props.name} {props.exercise}
  </p>
);
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
      {courses.map(element => (
        <Course key={element.id} course={element}></Course>
      ))}
    </div>
  );
};

export default App;
