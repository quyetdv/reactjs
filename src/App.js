import React from "react";

function UserInfo(props) {
  // console.log(props);
  return (
    <>
    <Avatar img={props.user.avatarUrl}></Avatar>
    <div>{props.user.name}</div>
    </>
  )
}

function Avatar(props) {
  console.log(props.img);
  return <img src={props.img} alt=""/>
}

function App() {
  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    user: {
      name: "Hello Kitty",
      avatarUrl: "https://placekitten.com/g/64/64"
    }
  };
  
  return (
    <>
      <UserInfo user = {comment.user}></UserInfo>
      {/* <img src={comment.user.avatarUrl} alt="" />
      <div>{comment.user.name}</div> */}
      <div>{comment.text}</div>
      <div>{comment.date.toLocaleDateString()}</div>
    </>
  );
}


export default App;
