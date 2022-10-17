import { useState } from "react";
import { ValorCelula } from "./types";
import getClasseJogador from "./utils/getClasseJogador";
import valor2Jogador from "./utils/valor2Jogador";

type Props = {
  valor: ValorCelula;
  celulaVitoria: boolean;
  onMarcacao: () => void;
};

export default function Celula(props: Props) {
  const texto = valor2Jogador(props.valor);

  const alterarValor = () => {
    if (props.valor === 0) {
      props.onMarcacao();
    }
  };

  const classes = ["celula"];
  if (props.valor !== 0) {
    classes.push(getClasseJogador(props.valor));
  }
  if (props.celulaVitoria) {
    classes.push("vitoria");
  }

  return (
    <div className={classes.join(" ")} onClick={alterarValor}>
      <span>{texto}</span>
    </div>
  );
}
