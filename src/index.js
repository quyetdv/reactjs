import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import App from "./Homework02";

ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(<Cource />, document.getElementById("root"));

// Element chỉ có duy nhất 1 thẻ
// const element = <h1>Hello, world!</h1>

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

//Element có nhiều thẻ phải bọc trong container
// const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>How are you?</h2>
//     </div>
//   )

//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );

// React có thể chứa biểu thức hoặc biến
// const name = 'Dang Quyet';
// const element = <h1>Hello, {name}</h1>;

// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );

// function Welcome() {
//   const name = "World";
//   // return 'hello ' + name;
//   return (
//     <div>
//       <h1 className="title">Hello {name}</h1>
//       <h2>Hello Quyet</h2>
//     </div>
//   );
// }
// // Welcome là 1 component, sẽ học ở phần tới
// ReactDOM.render(<Welcome />, document.getElementById("root"));

// function Welcome() {
//     const isLoggedIn = false;

//     if (isLoggedIn) return <h1>Hello!</h1>;
//     else return null
//   }

//   ReactDOM.render(<Welcome />, document.getElementById('root'));

// function Welcome() {
//     const isLoggedIn = true;

//     return (
//       <div>
//         {isLoggedIn && <h1>Hello!</h1>}
//       </div>
//     )
//   }

//   ReactDOM.render(<Welcome />, document.getElementById('root'));

// function Welcome() {
//     const isLoggedIn = true;

//     return (
//       <div>
//         <h1>Hello, you are {isLoggedIn ? '' : 'not'} logged in.</h1>
//         {/* if (isLoggedIn) return ''
//             else return 'not'
//         */}
//       </div>
//     )
//    }

//    ReactDOM.render(<Welcome />, document.getElementById('root'));

// const App = () => {
//   // Data
//   const courses = [
//     {
//       name: "Half Stack application development",
//       id: 1
//     },
//     {
//       name: "Node.js",
//       id: 2
//     }
//   ];

//   return (
//     <div>
//       {courses.map(course => (
//         <Course key={course.id} course={course}></Course>
//       ))}

//       {/* Bản chất là render ra 1 array như sau */}
//       {/*
//         {[
//           <Course key="1" course={courses[0]}/>, 
//           <Course key="2" course={courses[1]}/>
//         ]}
//         */}
//     </div>
//   );
// };

// // component Course
// const Course = props => {
//   return <h1>{props.course.name}</h1>;
// };

// ReactDOM.render(<App />, document.getElementById("root"));
