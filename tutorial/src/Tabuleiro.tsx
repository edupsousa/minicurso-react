import Celula from "./Celula";

export default function Tabuleiro() {
  return (
    <div className="tabuleiro">
      <Celula posicao={0} />
      <Celula posicao={1} />
      <Celula posicao={2} />
      <Celula posicao={3} />
      <Celula posicao={4} />
      <Celula posicao={5} />
      <Celula posicao={6} />
      <Celula posicao={7} />
      <Celula posicao={8} />
    </div>
  );
}
