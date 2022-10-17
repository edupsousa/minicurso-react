import { useState } from "react";
import Celula from "./Celula";

type Jogadores = 1 | 2;

const tabuleiro = [0, 1, 2, 0, 1, 2, 0, 1, 2] as const;

export default function Tabuleiro() {
  const [jogador, setJogador] = useState<Jogadores>(1);

  return (
    <div className="tabuleiro">
      {tabuleiro.map((celula, i) => (
        <Celula jogador={jogador} valor={celula} key={i} />
      ))}
    </div>
  );
}
