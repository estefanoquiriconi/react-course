import React from "react";
import ReactDom from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";
import {Button} from './Button';
import {TaskCard} from './Task'
import {Saludar} from './Saludar'

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <>
  <TaskCard ready={false} ></TaskCard>
  <Saludar></Saludar>
  </>
);
