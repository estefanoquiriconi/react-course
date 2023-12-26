import React, { useState } from "react";
import ReactDom from "react-dom/client";
import { Posts } from "./Posts";

const root = ReactDom.createRoot(document.getElementById("root"));

function Counter() {
  const [counter, setCounter] = useState(0);

  const [ msg, setMsg ] = useState('');

  return (
    <div>
      <h1>Counter: {counter} </h1>

      <button onClick={() => setCounter(counter + 1)}>Sumar</button>

      <button onClick={() => setCounter(counter - 1)}>Restar</button>

      <button onClick={() => setCounter(1000)}>Restar</button>

      <br/>
      <br/>
      <br/>

      <input onChange={e => setMsg(e.target.value)} />
      <button onClick={() => {
        alert('El mensaje es: ' + msg)
      }}>Guardar</button>
    </div>
  );
}

root.render(
  <>
    <Counter></Counter>
  </>
);
