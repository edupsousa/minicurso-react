export default function valor2Jogador(valor: 0 | 1 | 2): "" | "X" | "O" {
  switch (valor) {
    case 0:
      return "";
    case 1:
      return "X";
    case 2:
      return "O";
  }
}
