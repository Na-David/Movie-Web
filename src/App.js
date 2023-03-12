import Button from "./button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

const Hello = () => {
  useEffect(() => {
    console.log("created");
    return () => console.log("destroyed :(");
  },[])
  return <h1>hello</h1>
}

function App() {

  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(prev => !prev);


  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
