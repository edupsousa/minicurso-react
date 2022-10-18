import useJogo from "./estado/useJogo";

export default function Controles() {
  const { voltar, reiniciar } = useJogo();
  return (
    <div className="controles">
      <button className="botao voltar" onClick={voltar}>
        Voltar
      </button>
      <button className="botao reiniciar" onClick={reiniciar}>
        Reiniciar Jogo
      </button>
    </div>
  );
}
