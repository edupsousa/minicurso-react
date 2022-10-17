import { useState } from "react";
import Celula from "./Celula";

type Jogadores = 1 | 2;

const tabuleiro = [0, 0, 0, 0, 0, 0, 0, 0, 0] as const;

export default function Tabuleiro() {
  const [jogador, setJogador] = useState<Jogadores>(1);

  const proximoTurno = () => {
    if (jogador === 1) {
      setJogador(2);
    } else {
      setJogador(1);
    }
  };

  return (
    <div className="tabuleiro">
      {tabuleiro.map((celula, i) => (
        <Celula
          onClick={proximoTurno}
          jogador={jogador}
          valor={celula}
          key={i}
        />
      ))}
    </div>
  );
}
