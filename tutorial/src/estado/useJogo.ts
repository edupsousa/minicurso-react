import { useContext, useState } from "react";
import marcarCelula from "./marcarCelula";
import obterEstadoInicial from "./obterEstadoInicial";
import { AcoesJogo, EstadoJogo } from "../types";
import create from "zustand";
import { createTrackedSelector } from "react-tracked";

type Store = EstadoJogo & AcoesJogo;

const useStore = create<Store>()((set, get) => {
  const historico = [obterEstadoInicial()];

  const acoes = {
    marcar: (posicao: number) => {
      const novoEstado = marcarCelula(get(), posicao);
      set({ ...novoEstado });
      historico.push(novoEstado);
    },
    voltar: () => {
      if (historico.length === 1) return;
      const estadoAtual = historico.pop();
      set({ ...estadoAtual });
    },
    reiniciar: () => {
      historico.splice(1, historico.length - 1);
      set({ ...historico[0] });
    },
  };

  return {
    ...historico[0],
    ...acoes,
  };
});

const useJogo = createTrackedSelector(useStore);

export default useJogo;
