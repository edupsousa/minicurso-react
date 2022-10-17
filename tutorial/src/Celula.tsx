type Props = {
  valor: 0 | 1 | 2;
};

export default function Celula({ valor }: Props) {
  return <div className="celula">{valor}</div>;
}
