import { Jogadores, TabuleiroJogo } from "../types";

type Combinacao = [number, number, number];

const combinacoesVitoria: Combinacao[] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function calcularVencedor(
  tabuleiro: TabuleiroJogo
): null | { vencedor: Jogadores; combinacao: Combinacao } {
  for (let i = 0; i < combinacoesVitoria.length; i++) {
    const [a, b, c] = combinacoesVitoria[i];
    const x = tabuleiro[a];
    const y = tabuleiro[b];
    const z = tabuleiro[c];
    if (x && x === y && x === z) {
      return {
        vencedor: x,
        combinacao: combinacoesVitoria[i],
      };
    }
  }
  return null;
}
