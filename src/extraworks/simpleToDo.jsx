import { useEffect, useState } from "react";


const Todo = () => {

  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => {
    setToDo(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos(currentArr => [toDo, ...currentArr])
    setToDo("");

  }
  console.log(toDos);

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
        <button onClick={onSubmit}>Add</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, idx) => (<li key={idx}>{item}</li>))}
      </ul>
    </div>
  );
}

export default Todo;
