export function Greeting({ title, name = "User" }) {
  return (
    <h1>
      {title} dice {name}
    </h1>
  );
}

export function UserCard({ name, amount, married, address, greet }) {
  return (
    <div>
      <h1> {name} </h1>
      <p> 💵{amount} </p>
      <p>{married ? "married" : "sindle"}</p>
      <ul>
        <li>City: {address.city} </li>
        <li>Address: {address.street} </li>
        <li></li>
      </ul>
    </div>
  );
}
