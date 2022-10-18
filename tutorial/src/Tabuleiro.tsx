import Celula from "./Celula";
import { useContextoJogo } from "./ContextoJogo";

export default function Tabuleiro() {
  const [{ tabuleiro }] = useContextoJogo();

  return (
    <div className="tabuleiro">
      {tabuleiro.map((_, i) => (
        <Celula posicao={i} key={i} />
      ))}
    </div>
  );
}
