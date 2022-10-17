import { useState } from "react";

type ValorCelula = 0 | 1 | 2;

type Props = {
  valor: ValorCelula;
  jogador: 1 | 2;
};

export default function Celula(props: Props) {
  const [valor, setValor] = useState(props.valor);

  let texto = "";
  if (valor === 1) {
    texto = "X";
  } else if (valor === 2) {
    texto = "O";
  }

  const alterarValor = () => {
    if (valor === 0) {
      setValor(props.jogador);
    }
  };

  const classes = ["celula"];
  if (valor === 1) {
    classes.push("xiszinho");
  } else if (valor === 2) {
    classes.push("bolinha");
  }

  return (
    <div className={classes.join(" ")} onClick={alterarValor}>
      {texto}
    </div>
  );
}
