type Props = {
  reiniciarJogo: () => void;
};

export default function Controles({ reiniciarJogo }: Props) {
  return (
    <div className="controles">
      <button className="botao reiniciar" onClick={reiniciarJogo}>
        Reiniciar Jogo
      </button>
    </div>
  );
}
