import { EstadoJogo } from "../types";

export default function obterEstadoInicial(): EstadoJogo {
  return {
    tabuleiro: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    jogador: 1,
    encerrado: false,
    celulasVitoria: [],
  };
}
