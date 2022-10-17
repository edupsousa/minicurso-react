import { EstadoJogo } from "../types";
import calcularVencedor from "../utils/calcularVencedor";

function proximoTurno(jogo: EstadoJogo): EstadoJogo {
  const novo = { ...jogo };
  const resultado = calcularVencedor(jogo.tabuleiro);
  if (resultado === null) {
    if (jogo.jogador === 1) {
      novo.jogador = 2;
    } else {
      novo.jogador = 1;
    }
  } else {
    novo.encerrado = true;
    novo.celulasVitoria = resultado.combinacao;
  }
  return novo;
}

export default function marcarCelula(
  jogo: EstadoJogo,
  posicao: number
): EstadoJogo {
  if (jogo.encerrado) {
    return jogo;
  }
  const novo = { ...jogo };
  novo.tabuleiro = [...jogo.tabuleiro];
  novo.tabuleiro[posicao] = jogo.jogador;
  return proximoTurno(novo);
}
