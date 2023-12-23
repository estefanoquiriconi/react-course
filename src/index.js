import React from "react";
import ReactDom from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";
import {Button} from './Button';
import {TaskCard} from './Task'
import {Saludar} from './Saludar'

const root = ReactDom.createRoot(document.getElementById("root"));

const handleChange = (e) => {
  console.log(e.target.value);
}

root.render(
  <>
  <TaskCard ready={false} ></TaskCard>
  <Saludar></Saludar>
  <Button text="Saludar" name="Estéfano"></Button>
  <Button text="Cambiar fondo" ></Button>

  <input id="hola" onChange={handleChange}></input>

  <form onSubmit={(e)=>{
    e.preventDefault()
    console.log('enviado');
  }}>
    <h1>Registro de usuario</h1>
    <button>Send</button>
  </form>
  </>
);
