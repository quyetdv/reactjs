import React from "react";

const Row = props => {
  const remove = e => {
    e.target.parentNode.innerHTML = "";
  };
  return (
    <tr>
      <td>
        {props.std.name} <button onClick={remove}>Delete</button>
      </td>
    </tr>
  );
};

const App = () => {
  const handleClick = e => {
    e.target.innerHTML === "ON"
      ? (e.target.innerHTML = "OFF")
      : (e.target.innerHTML = "ON");
  };

  const students = [
    { name: "Student1" },
    { name: "Student2" },
    { name: "Student3" }
  ];
  return (
    <>
      <h1>Home Work 03</h1>
      <button onClick={handleClick}>ON</button>
      <div>
        <table>
          <tbody>
            {students.map((students, index) => (
              <Row key={index} std={students} id={index}></Row>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
