import { createContext, useContext, useMemo, useState } from "react";
import marcarCelula from "./estado/marcarCelula";
import obterEstadoInicial from "./estado/obterEstadoInicial";
import { EstadoJogo } from "./types";

type TipoContextoJogo = [
  estado: EstadoJogo,
  acoes: {
    marcar: (posicao: number) => void;
    voltar: () => void;
    reiniciar: () => void;
  }
];

export const ContextoJogo = createContext<TipoContextoJogo | null>(null);

export const useContextoJogo = () => useContext(ContextoJogo)!;

type Props = React.PropsWithChildren<{}>;

export function ProvedorContextoJogo({ children }: Props) {
  const [historico, setHistorico] = useState<EstadoJogo[]>([
    obterEstadoInicial(),
  ]);

  const estado = historico[historico.length - 1];

  const acoes = {
    marcar: (posicao: number) => {
      const novoEstado = marcarCelula(estado, posicao);
      setHistorico((historicoAnterior) => [...historicoAnterior, novoEstado]);
    },
    voltar: () => {
      if (historico.length === 1) return;
      setHistorico((historicoAnterior) => historicoAnterior.slice(0, -1));
    },
    reiniciar: () => {
      setHistorico([obterEstadoInicial()]);
    },
  };

  return (
    <ContextoJogo.Provider value={[estado, acoes]}>
      {children}
    </ContextoJogo.Provider>
  );
}
