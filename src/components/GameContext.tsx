import React, { useContext, useState, useCallback } from 'react';

//interface dos valores
interface IGameContext {
  vida: number;
  energia: number;
  comida: number;
  recursos: number;
  historico: string[];
  contadorAcoes: number;
  comer: () => void;
  descancar: () => void;
  explorar: () => void;
  trabalhar: () => void;
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
  const [contadorAcoes, setContadorAcoes] = useState(0);

  //Funcionalidades para cada funçäo do jogo

  const comer = useCallback(() => {

    if(contadorAcoes == 2){
      return;
    }

    if(comida <= 0){
      sethistorico(h => [...h, 'Vocë não tem comida para comer']);
      return;
    }

    if (comida >= 10){
      setVida(v => Math.max(v - 10, 0));
      sethistorico(h => [...h, 'Vocë comeu tanto que passou mal']);
      return;
    }

    setComida(c => c - 1);
    setVida(v => Math.min(v + 20, 100));
    sethistorico(h => [...h, 'Vocë comeu e recuperou parte da sua vida']);
    setContadorAcoes(a => a + 1);

  }, [comida, contadorAcoes]);

  const descancar = useCallback(() => {

    if(contadorAcoes == 2){
      return;
    }

    if(energia >= 100){
      sethistorico(h => [...h, 'Vocë tem tanta energia que se recusa a descançar']);
      return;
    }

    setEnergia(e => Math.min(e + 30, 100));
    setVida(v => Math.min(v + 5, 100));
    sethistorico(h => [...h, 'Vocë descansou um pouco']);
    setContadorAcoes(a => a + 1);
  }, [energia, contadorAcoes]);

  const trabalhar = useCallback(() => {
      if(contadorAcoes == 2){
        return;
      }

      if(energia <= 0) {
        setVida(v => v - 5);
        setRecursos(r => Math.max(r - 5, 0))
        sethistorico(h => [...h, 'Vocë está com tanta sono que desmaiou e tem roubarão']);
        return;
      }

      setContadorAcoes(a => a + 1);
      setEnergia(e => Math.max(e - 25, 0));
      setComida(c => Math.max(c + 1, 0));
      setRecursos(r => r + 10);
      sethistorico(h => [...h, 'Vocë acabou de achar diamante, dia de sorte']);

  }, [comida, energia, contadorAcoes, recursos]);

  const explorar = useCallback(() => {
    //30% de chanse de azar, e 40 de normal e 30% de sorte
    const aventura = Math.floor(Math.random() * 5) + 1;

    if(aventura == 1) {
      setContadorAcoes(0);
      setVida(v => Math.max(v - 10, 0));
      sethistorico(h => [...h, 'Vocë acabou de se peder, e se machucou']);
    } else if(aventura == 2){
      setContadorAcoes(0);
      setEnergia(e => Math.max(e - 10, 0));
      sethistorico(h => [...h, 'Vocë correu muito e acabou ficando cansado']);
    } else if(aventura == 3) {
      setContadorAcoes(0);
      setRecursos(r => r + 5);
      sethistorico(h => [...h, 'Vocë acabou de achar recursos, dia de sorte']);
    } else if(aventura == 4) {
      setContadorAcoes(0);
      setEnergia(e => Math.max(e - 20, 0));
      setComida(c => Math.max(c - 1, 0));
      sethistorico(h => [...h, 'Um lobo apareceu e vocë teve que fugir, gastando energia e comida']);
    } else {
      setContadorAcoes(0);
      setRecursos(r => r + 10);
      sethistorico(h => [...h, 'Vocë acabou de achar diamante, dia de sorte']);
    }

  }, [recursos, contadorAcoes]);

  return (
    <GameContext.Provider value={{vida, energia, comida, recursos, historico, contadorAcoes, comer, descancar, explorar, trabalhar}}>
      {children}
    </GameContext.Provider>
  );
}

// Hook costumizado
export function useGameContext()
{
  const context = useContext(GameContext);

  if(!context){
    throw new Error("useGameContext precisa estar dentro de um GameProvider")
  }

  return context;

}

