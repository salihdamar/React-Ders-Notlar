import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PersonInfo from "./PersonInfo";

function App() {
  const [count, setCount] = useState(0);

  const [firstName, setFirstName] = useState(".");
  const [names, setNames] = useState(["Salih", "Elif", "Hakan", "Ali"]);

  const handleChange = () => {
    setFirstName("Selman");
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <hr />
      <div>{firstName}</div>
      <br />
      <div>
        <button id="selmanButton" onClick={handleChange}>
          Selman Olsun
        </button>
      </div>
      <br />
      <div>
        <button
          id="EftelyaButton"
          onClick={() => {
            setFirstName("Eftelya");
          }}
        >
          Eftelya Olsun
        </button>
      </div>
      <br />
      <hr />
      <div>
        {names.map((name, index) => (
          <div key={index}>{name}</div>
        ))}
      </div>
      <hr />

      <div>
        <PersonInfo />
      </div>
    </>
  );
}

export default App;
