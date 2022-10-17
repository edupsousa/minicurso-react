import { Jogadores } from "./types";
import getClasseJogador from "./utils/getClasseJogador";
import valor2Jogador from "./utils/valor2Jogador";

type Props = {
  jogador: Jogadores;
  mostrarVencedor: boolean;
};

export default function Placar({ jogador, mostrarVencedor }: Props) {
  return (
    <div className={`placar ${getClasseJogador(jogador)}`}>
      {mostrarVencedor ? "Vencedor:" : "Jogador Atual:"}{" "}
      {valor2Jogador(jogador)}
    </div>
  );
}
