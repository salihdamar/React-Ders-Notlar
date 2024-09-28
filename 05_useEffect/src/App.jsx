import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

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
    </>
  );
}

export default App;
