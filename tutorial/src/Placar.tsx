import { useContextoJogo } from "./ContextoJogo";
import getClasseJogador from "./utils/getClasseJogador";
import valor2Jogador from "./utils/valor2Jogador";

export default function Placar() {
  const [{ jogador, encerrado }] = useContextoJogo();
  const classes = ["placar", getClasseJogador(jogador)];
  if (encerrado) {
    classes.push("vencedor");
  }
  return (
    <div className={classes.join(" ")}>
      {encerrado ? "Vencedor:" : "Jogador Atual:"} {valor2Jogador(jogador)}
    </div>
  );
}
