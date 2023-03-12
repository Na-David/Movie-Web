import { useEffect, useState } from "react";


const App = () => {

  const [toDo, setToDo] = useState("");
  const onChange = (e) => {
    setToDo(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
  }

  return (
    <div>
      <form>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
        <button onClick={onSubmit}>Add</button>
      </form>
    </div>
  );
}

export default App;
