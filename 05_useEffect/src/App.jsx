import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import VeriCekme from "./VeriCekme";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    console.log("Her zaman Çalışır.Sayfa her çalıştırıldığında");
  });

  useEffect(() => {
    console.log("İlk render edildiğinde");
  }, []);

  useEffect(() => {
    console.log("ilk render edildiğinde ve firstname değiştiğinde");
  }, [firstName]);

  useEffect(() => {
    console.log("ilk render edildiğinde ve firstname ve lastname değiştiğinde");
  });

  const [section, setSection] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${section}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [section]);
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

      <div>
        <button onClick={() => setFirstName("Eftelya")}>Adı Değiştir</button>
        <button onClick={() => setLastName("Damar")}>Soyadı Değiştir</button>
      </div>
      <div>
        <div>
          <button onClick={() => setSection("posts")}>Posts</button>
          <button onClick={() => setSection("users")}>Users</button>
          <button onClick={() => setSection("comments")}>Comments</button>
        </div>
        <h1> {section} </h1>
      </div>

      <div>
        <h2>Çekilen Veriler</h2>
        {items.map((item, i) => (
          <pre style={{ textAlign: "left" }} key={i}>
            {JSON.stringify(item["title"], null, 2)}
          </pre>
        ))}
      </div>
    </>
  );
}

export default App;
