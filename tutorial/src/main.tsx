import React from "react";
import ReactDOM from "react-dom/client";
import Tabuleiro from "./Tabuleiro";
import "./jogo.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Tabuleiro />
  </React.StrictMode>
);
