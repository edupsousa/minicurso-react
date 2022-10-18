import { useContextoJogo } from "./ContextoJogo";

export default function Controles() {
  const [, { voltar, reiniciar }] = useContextoJogo();
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
