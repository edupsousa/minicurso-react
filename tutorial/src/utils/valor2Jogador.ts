import { ValorCelula } from "../types";

export default function valor2Jogador(valor: ValorCelula): "" | "X" | "O" {
  switch (valor) {
    case 0:
      return "";
    case 1:
      return "X";
    case 2:
      return "O";
  }
}
