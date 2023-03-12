import Button from "./button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter(counter+1);

  const iRun = () => console.log("I am Rendered");
  useEffect(() => {
    iRun();
  },[])
  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>hello</button>
      <Button onClick={onClick} text={"Hyunmoon"}/>
    </div>
  );
}

export default App;
