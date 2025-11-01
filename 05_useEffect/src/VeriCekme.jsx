import  { useState, useEffect } from "react";

function VeriCekme() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {data.map((item) => (
        <p key={item.id}> {JSON.stringify(item["title"], null, 2)}</p>
      ))}
    </div>
  );
}

export default VeriCekme;
