import { useState } from "react";
import Celula from "./Celula";
import { Jogadores, TabuleiroJogo } from "./types";
import calcularVencedor from "./utils/calcularVencedor";
import getClasseJogador from "./utils/getClasseJogador";
import valor2Jogador from "./utils/valor2Jogador";

export default function Tabuleiro() {
  const [celulasVitoria, setCelulasVitoria] = useState<number[]>([]);
  const [encerrado, setEncerrado] = useState(false);
  const [tabuleiro, setTabuleiro] = useState<TabuleiroJogo>([
    0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [jogador, setJogador] = useState<Jogadores>(1);

  const marcarPosicao = (posicao: number) => {
    if (encerrado) return;

    const novoTabuleiro: TabuleiroJogo = [...tabuleiro];
    novoTabuleiro[posicao] = jogador;
    setTabuleiro(novoTabuleiro);
    const resultado = calcularVencedor(novoTabuleiro);
    if (resultado === null) {
      if (jogador === 1) {
        setJogador(2);
      } else {
        setJogador(1);
      }
    } else {
      setEncerrado(true);
      setCelulasVitoria(resultado.combinacao);
    }
  };

  return (
    <div className={`jogo ${encerrado && "encerrado"}`}>
      <div className="tabuleiro">
        {tabuleiro.map((celula, i) => (
          <Celula
            celulaVitoria={celulasVitoria.includes(i)}
            onMarcacao={() => marcarPosicao(i)}
            valor={celula}
            key={i}
          />
        ))}
      </div>
      <div className={`jogador-atual ${getClasseJogador(jogador)}`}>
        {encerrado ? "Vencedor:" : "Jogador Atual:"} {valor2Jogador(jogador)}
      </div>
    </div>
  );
}
