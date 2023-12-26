import React, { useState, useEffect } from "react";
import ReactDom from "react-dom/client";
import { Posts } from "./Posts";

const root = ReactDom.createRoot(document.getElementById("root"));

function Counter() {
  const [counter, setCounter] = useState(0);

  const [ msg, setMsg ] = useState('');

  useEffect(() => {
    console.log('render');
  }, [counter])

  return (
    <div>
      <input onChange={e => setMsg(e.target.value)} />
      <button onClick={() => {
        alert('El mensaje es: ' + msg)
      }}>Guardar</button>

      <hr></hr>

      <h1>Counter: {counter} </h1>
      <button onClick={()=> {
        setCounter(counter + 1)
      }}>
        Incrementar
      </button>
    </div>
  );
}

root.render(
  <>
    <Counter></Counter>
  </>
);
