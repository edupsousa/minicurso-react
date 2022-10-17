import { ValorCelula } from "../types";

export default function getClasseJogador(
  valor: ValorCelula
): "" | "xiszinho" | "bolinha" {
  switch (valor) {
    case 0:
      return "";
    case 1:
      return "xiszinho";
    case 2:
      return "bolinha";
  }
}
