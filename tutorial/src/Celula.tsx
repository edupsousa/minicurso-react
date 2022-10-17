import { useState } from "react";

type ValorCelula = 0 | 1 | 2;

type Props = {
  valor: ValorCelula;
};

export default function Celula(props: Props) {
  const [valor, setValor] = useState(props.valor);

  const texto = valor === 1 ? "X" : valor === 2 ? "O" : "";
  const alterarValor = () => {
    setValor(((valor + 1) % 3) as ValorCelula);
  };

  return (
    <div className="celula" onClick={alterarValor}>
      {texto}
    </div>
  );
}
