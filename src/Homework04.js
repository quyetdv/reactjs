import React from "react";

//Task
class UserInfo extends React.Component {
  render() {
    return (
      <>
        <img src={this.props.user.avatarUrl} alt="avatar" />
        <div>{this.props.user.name}</div>
      </>
    );
  }
}
//Delete Row
class Row extends React.Component {
  render() {
    const { name } = this.props.student;
    const index = this.props.index;
    return (
      <tr data-index={index}>
        <td>{name}</td>
        <td>
          <button onClick={e => this.props.deleteRow(e, index)}>Delete</button>
        </td>
      </tr>
    );
  }
}

class App extends React.Component {
  toggle(e) {
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
  }
  deleteRow(e, index) {
    e.target.closest(`[data-index="${index}"]`).remove();
  }
  render() {
    const comment = {
      date: new Date(),
      text: "I hope you enjoy learning React!",
      user: {
        name: "Hello Kitty",
        avatarUrl: "https://placekitten.com/g/64/64"
      }
    };

    const students = [
      { name: "Student1" },
      { name: "Student2" },
      { name: "Student3" }
    ];
    return (
      <>
        <h1>Home Work 04</h1>
        {/* UserInfo - Avatar */}
        <div>
          <UserInfo user={comment.user}></UserInfo>
          <div>{comment.text}</div>
          <div>{comment.date.toLocaleDateString()}</div>
        </div>

        {/* On/Off button */}
        <button onClick={this.toggle}>ON</button>
        
        {/* Delete Row */}
        <table>
          <tbody>
            {students.map((student, index) => {
              return (
                <Row
                  key={index}
                  index={index}
                  student={student}
                  deleteRow={this.deleteRow}
                ></Row>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}
export default App;
