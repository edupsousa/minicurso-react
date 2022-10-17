import { useState } from "react";
import Controles from "./Controles";
import Placar from "./Placar";
import Tabuleiro from "./Tabuleiro";
import { Jogadores, TabuleiroJogo } from "./types";
import calcularVencedor from "./utils/calcularVencedor";

export default function Jogo() {
  const [celulasVitoria, setCelulasVitoria] = useState<number[]>([]);
  const [encerrado, setEncerrado] = useState(false);
  const [tabuleiro, setTabuleiro] = useState<TabuleiroJogo>([
    0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [jogador, setJogador] = useState<Jogadores>(1);

  const reiniciarJogo = () => {
    setCelulasVitoria([]);
    setEncerrado(false);
    setTabuleiro([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    setJogador(1);
  };

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
      <Placar jogador={jogador} mostrarVencedor={encerrado} />
      <Tabuleiro
        tabuleiro={tabuleiro}
        celulasVitoria={celulasVitoria}
        marcarPosicao={marcarPosicao}
      />
      <Controles reiniciarJogo={reiniciarJogo} />
    </div>
  );
}