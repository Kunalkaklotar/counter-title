import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  const setValue = () => {
    setCounter(++counter);
    document.title = "countValue" + " = " + " " + `${counter}`;
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", }} >


    <button
      style={{ color: "black", backgroundColor: "white", fontSize: "24px", borderRadius: "10px", padding: "12px 24px", }}
    onClick={() => setValue()} > click </button>

    <h1 style={{fontSize: "80px", color: "red",}}>{counter}</h1>


    </div>
  );
}

export default App;