type Props = {
  valor: 0 | 1 | 2;
};

export default function Celula({ valor }: Props) {
  const texto = valor === 1 ? "X" : valor === 2 ? "O" : "";
  return <div className="celula">{texto}</div>;
}
