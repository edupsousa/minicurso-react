type Props = {
  reiniciarJogo: () => void;
  voltar: () => void;
};

export default function Controles({ reiniciarJogo, voltar }: Props) {
  return (
    <div className="controles">
      <button className="botao voltar" onClick={voltar}>
        Voltar
      </button>
      <button className="botao reiniciar" onClick={reiniciarJogo}>
        Reiniciar Jogo
      </button>
    </div>
  );
}
