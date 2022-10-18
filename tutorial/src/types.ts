export type CelulaVazia = 0;
export type Jogadores = 1 | 2;
export type ValorCelula = CelulaVazia | Jogadores;

export type TabuleiroJogo = [
  ValorCelula,
  ValorCelula,
  ValorCelula,
  ValorCelula,
  ValorCelula,
  ValorCelula,
  ValorCelula,
  ValorCelula,
  ValorCelula
];

export type EstadoJogo = {
  tabuleiro: TabuleiroJogo;
  jogador: Jogadores;
  encerrado: boolean;
  celulasVitoria: number[];
};

export type AcoesJogo = {
  marcar: (posicao: number) => void;
  voltar: () => void;
  reiniciar: () => void;
};
