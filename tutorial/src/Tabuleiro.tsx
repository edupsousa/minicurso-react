import Celula from "./Celula";
import { TabuleiroJogo } from "./types";

type Props = {
  tabuleiro: TabuleiroJogo;
  celulasVitoria: number[];
  marcarPosicao: (posicao: number) => void;
};

export default function Tabuleiro({
  tabuleiro,
  celulasVitoria,
  marcarPosicao,
}: Props) {
  return (
    <div className="tabuleiro">
      {tabuleiro.map((celula, i) => (
        <Celula
          celulaVitoria={celulasVitoria.includes(i)}
          onMarcacao={() => marcarPosicao(i)}
          valor={celula}
          key={i}
        />
      ))}
    </div>
  );
}
