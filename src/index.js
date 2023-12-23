import React from "react";
import ReactDom from "react-dom/client";
import { Posts } from "./Posts";

const root = ReactDom.createRoot(document.getElementById("root"));

const users = [
  {
    id: 1,
    name: "Ryan Ray",
    image: "https://robohash.org/user1",
  },
  {
    id: 2,
    name: "Joe Joes",
    image: "https://robohash.org/user2",
  },
  {
    id: 3,
    name: "Bob Bobe",
    image: "https://robohash.org/user3",
  },
];

root.render(
  <>
    {users.map((user, index) => {
      return (
        <div key={index}>
          <h1>{user.name}</h1>
          <img src={user.image}></img>
        </div>
      );
    })}
  </>
);
