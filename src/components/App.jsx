import React, { useState } from "react";

function App() {

  const [input, setToDo] = useState("");
  const [saveItems, setItems] = useState([]);


  function handleChange(event) {
    const {value} = event.target;
    setToDo(value);
  }

  function onClick() {
    setItems((prevItems) => {
      return [...prevItems, input];
    });
    setToDo("");
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={input} />
        <button onClick={onClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {saveItems.map((item) => {
            return (<li>{item}</li>)
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
