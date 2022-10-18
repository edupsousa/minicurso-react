import { useContextoJogo } from "./ContextoJogo";
import Controles from "./Controles";
import Placar from "./Placar";
import Tabuleiro from "./Tabuleiro";

export default function Jogo() {
  const [{ encerrado }] = useContextoJogo();

  return (
    <div className={`jogo ${encerrado && "encerrado"}`}>
      <Placar />
      <Tabuleiro />
      <Controles />
    </div>
  );
}
