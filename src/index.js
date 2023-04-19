import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//Affichage du composant App avec root.render
//Ajout de React.StrictMode pour activer des avertissements supplémentaires en mode de développement.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);