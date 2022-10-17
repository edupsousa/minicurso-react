const tabuleiro = ["X", "O", "X", "O", "X", "O", "O", "X", "O"] as const;

export default function Tabuleiro() {
  return (
    <div className="tabuleiro">
      {tabuleiro.map((celula, i) => (
        <div key={i} className="celula">
          {celula}
        </div>
      ))}
    </div>
  );
}
