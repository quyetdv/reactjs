import React from "react";

const Row = ({ index, student, deleteRow }) => {
  const { name } = student;
  return (
    <tr data-index={index}>
      <td>{name}</td>
      <td>
        <button onClick={ e => deleteRow(e, index) }>Delete</button>
      </td>
    </tr>
  );
};

const App = () => {
  const handleClick = e => {
    let status = e.target.textContent;
    switch (status) {
      case "ON":
        e.target.textContent = "OFF";
        break;
      case "OFF":
        e.target.textContent = "ON";
        break;
      default:
        return;
    }
  };

  const students = [
    { name: "Student1" },
    { name: "Student2" },
    { name: "Student3" }
  ];

  const deleteRow = (e,index) => {
    console.log(index)
    console.log(e.target.closest(`[data-index="${index}"]`))
    e.target.closest(`[data-index="${index}"]`).remove()
  }

  const rows = students.map((student, index) => {
    return (
      <Row key={index} index={index} student={student} deleteRow={deleteRow}></Row>
    );
  });

  return (
    <>
      <h1>Home Work 03</h1>
      <button onClick={handleClick}>ON</button>
      <table>
        <tbody>{rows}</tbody>
      </table>
    </>
  );
};

export default App;
