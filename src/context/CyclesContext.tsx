import { ReactNode, createContext, useState, useReducer } from "react";
import { Cycle, cycleReducer } from "../reducers/Cycles";
interface CreateCycleData {
  task: string;
  minutesAmount: number;
}

interface CyclesContextType {
  cycles: Cycle[];
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  amountSecondsPassed: number;
  markCurrentCycleAsFinished: () => void;
  handleSetSecondsPassed: (seconds: number) => void;
  createNewCycle: (data: CreateCycleData) => void;
  handleInterruptCycle: () => void;
}

export const CyclesContext = createContext({} as CyclesContextType);

interface CyclesContextProviderProps {
  children: ReactNode;
}

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cycleState, dispatch] = useReducer(cycleReducer, {
    cycles: [],
    activeCycleId: null,
  });

  const { cycles, activeCycleId } = cycleState;

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const activeCycle = cycles.find((cycle: Cycle) => cycle.id === activeCycleId);

  function markCurrentCycleAsFinished() {
    dispatch({ type: "MARK_CURRENT_CYCLE", payload: activeCycleId });
  }

  function handleSetSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime());
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };
    dispatch({ type: "ADD_NEW_CYCLE", payload: newCycle });
    setAmountSecondsPassed(0);
  }

  function handleInterruptCycle() {
    dispatch({ type: "INTERRUPT_CURRENT_CYCLE", payload: activeCycleId });
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        handleSetSecondsPassed,
        createNewCycle,
        handleInterruptCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
}
