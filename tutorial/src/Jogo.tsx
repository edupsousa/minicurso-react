import Controles from "./Controles";
import useJogo from "./estado/useJogo";
import Placar from "./Placar";
import Tabuleiro from "./Tabuleiro";

export default function Jogo() {
  const { encerrado } = useJogo();

  return (
    <div className={`jogo ${encerrado && "encerrado"}`}>
      <Placar />
      <Tabuleiro />
      <Controles />
    </div>
  );
}
