import { useState } from "react";
import getClasseJogador from "./utils/getClasseJogador";
import valor2Jogador from "./utils/valor2Jogador";

type ValorCelula = 0 | 1 | 2;

type Props = {
  valor: ValorCelula;
  jogador: 1 | 2;
  onClick: () => void;
};

export default function Celula(props: Props) {
  const [valor, setValor] = useState(props.valor);

  const texto = valor2Jogador(valor);

  const alterarValor = () => {
    if (valor === 0) {
      setValor(props.jogador);
      props.onClick();
    }
  };

  const classes = ["celula", getClasseJogador(valor)];

  return (
    <div className={classes.join(" ")} onClick={alterarValor}>
      {texto}
    </div>
  );
}
