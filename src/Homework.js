import React from "react";

function Header(props) {
  return <h1>{props.title}</h1>;
}

function Part(props) {
  return (
    <p>
      {props.test.name} {props.test.exercises}
    </p>
  );
}

function Content(props) {
  let child = [];

  for (let i = 0; i< props.section.length; i++) {
    child.push(
      <Part test={props.section[i]} key={i}></Part>
    )
  }
  return child;
}


function Total(props) {
  let sum = 0;
  for (let j = 0; j < props.total.length; j++) {
    sum += Number(props.total[j].exercises);
  }
  return <p>Number of exercises {sum} </p>;
}

function Cource() {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  };
  
  return (
    <>
      <Header title={course.name}></Header>
      <Content section={course.parts}></Content>
      <Total total={course.parts}></Total>
    </>
  );
}

export default Cource;
