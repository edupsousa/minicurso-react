import { useState } from "react";
import Controles from "./Controles";
import marcarCelula from "./estado/marcarCelula";
import obterEstadoInicial from "./estado/obterEstadoInicial";
import Placar from "./Placar";
import Tabuleiro from "./Tabuleiro";
import { EstadoJogo } from "./types";

export default function Jogo() {
  const [estadoJogo, setEstadoJogo] = useState<EstadoJogo[]>([
    obterEstadoInicial(),
  ]);
  const getEstadoAtual = () => estadoJogo[estadoJogo.length - 1];

  const reiniciarJogo = () => {
    setEstadoJogo([obterEstadoInicial()]);
  };

  const voltar = () => {
    if (estadoJogo.length === 1) return;
    setEstadoJogo(estadoJogo.slice(0, -1));
  };

  const { encerrado, jogador, tabuleiro, celulasVitoria } = getEstadoAtual();

  return (
    <div className={`jogo ${encerrado && "encerrado"}`}>
      <Placar jogador={jogador} mostrarVencedor={encerrado} />
      <Tabuleiro
        tabuleiro={tabuleiro}
        celulasVitoria={celulasVitoria}
        marcarPosicao={(posicao) =>
          setEstadoJogo((atual) => [
            ...atual,
            marcarCelula(atual[atual.length - 1], posicao),
          ])
        }
      />
      <Controles voltar={voltar} reiniciarJogo={reiniciarJogo} />
    </div>
  );
}
