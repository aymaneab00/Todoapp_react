import React from "react";

export default function List({ taches, delettach, modiftache }) {
  return (
    <div>
      {taches.map((t, index) => (
        <div key={index}>
          <p>
            {t.description} {t.completed ? "✅" : "❌"}{" "}
            <button onClick={() => delettach(index)}>
              Supprimer cette tache
            </button>{" "}
            <button onClick={() => modiftache(index)}>
              Modifier cette tache
            </button>{" "}
          </p>
        </div>
      ))}
    </div>
  );
}
