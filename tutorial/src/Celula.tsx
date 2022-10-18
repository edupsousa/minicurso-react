import useJogo from "./estado/useJogo";
import getClasseJogador from "./utils/getClasseJogador";
import valor2Jogador from "./utils/valor2Jogador";

type Props = {
  posicao: number;
};

export default function Celula({ posicao }: Props) {
  const { tabuleiro, celulasVitoria, marcar } = useJogo();
  const valor = tabuleiro[posicao];
  const texto = valor2Jogador(valor);

  const alterarValor = () => {
    if (valor === 0) {
      marcar(posicao);
    }
  };

  const classes = ["celula"];
  if (valor !== 0) {
    classes.push(getClasseJogador(valor));
  }
  if (celulasVitoria.includes(posicao)) {
    classes.push("vitoria");
  }

  return (
    <div className={classes.join(" ")} onClick={alterarValor}>
      <span>{texto}</span>
    </div>
  );
}
