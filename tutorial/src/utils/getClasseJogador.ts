export default function getClasseJogador(
  valor: 0 | 1 | 2
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
