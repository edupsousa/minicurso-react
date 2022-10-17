import Celula from "./Celula";

const tabuleiro = [0, 1, 2, 0, 1, 2, 0, 1, 2] as const;

export default function Tabuleiro() {
  return (
    <div className="tabuleiro">
      {tabuleiro.map((celula, i) => (
        <Celula valor={celula} key={i} />
      ))}
    </div>
  );
}
