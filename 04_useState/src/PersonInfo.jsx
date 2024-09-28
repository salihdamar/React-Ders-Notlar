import React, { useState } from "react";

function PersonInfo() {
  const [showInfo, setShowInfo] = useState(false);

  // Kişinin bilgileri
  const person = {
    name: "Selman",
    age: 28,
    job: "Software Developer",
  };

  return (
    <>
      <div>
        <h3>PersonInfo</h3>
      </div>
      <button onClick={() => setShowInfo(true)}>Göster</button>
      <button onClick={() => setShowInfo(false)}>Gizle</button>

      {showInfo && (
        <div>
          <p>isim:{person.name}</p>
          <p>Yaş:{person.age}</p>
          <p>Meslek:{person.job}</p>
        </div>
      )}
    </>
  );
}

export default PersonInfo;
