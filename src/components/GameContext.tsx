import React, { useContext, useState } from 'react';

//interface dos valores
interface IGameContext {
  vida: number;
  energia: number;
  comida: number;
  recursos: number;
  historico: string[];
  contadorAcoes: number;
}

//Criando valores com a interface
export const GameContext = React.createContext<IGameContext | undefined>(undefined);

//funçäo para retornar os dados
export function GameProvider({ children }: { children: React.ReactNode }) {

  // useState está com o valor inicia solicitado

  const [vida, setVida] = useState(100);
  const [energia, setEnergia] = useState(100);
  const [comida, setComida] = useState(5);
  const [recursos, setRecursos] = useState(0);
  const [historico, sethistorico] = useState(['Hoje é mais um dia pessado para essa aventureiro']);
  const [contadorAcoes, setContadorAcoes] = useState(0)

  return (
    <GameContext.Provider value={{vida, energia, comida, recursos, historico, contadorAcoes}}>
      {children}
    </GameContext.Provider>
  );
}

// Hook costumizado
export function useGameContext() {
  const context = useContext(GameContext);

  if(!context){
    throw new Error("useGameContext precisa estar dentro de um GameProvider")
  }

  return context;

}

