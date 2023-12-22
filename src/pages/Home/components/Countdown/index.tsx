import { differenceInSeconds } from "date-fns";
import { useContext, useEffect } from "react";
import { CounteDownContainer, Separator } from "./styles";
import { CyclesContext } from "../../../../context/CyclesContext";

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    amountSecondsPassed,
    markCurrentCycleAsFinished,
    handleSetSecondsPassed,
  } = useContext(CyclesContext);

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;

  function timer() {
    const interval = setInterval(() => {
      const secondsDifference = differenceInSeconds(
        new Date(),
        activeCycle!.startDate,
      );

      if (secondsDifference >= totalSeconds) {
        markCurrentCycleAsFinished();
        handleSetSecondsPassed(totalSeconds);
        clearInterval(interval);
      } else {
        handleSetSecondsPassed(secondsDifference);
      }
    }, activeCycle!.minutesAmount * 60);

    return interval;
  }

  useEffect(() => {
    let interval: number;

    if (activeCycle) {
      interval = timer();
    }
    return () => {
      clearInterval(interval);
    };
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    handleSetSecondsPassed,
    markCurrentCycleAsFinished,
  ]);

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`;
    }
  }, [minutes, seconds, activeCycle]);

  return (
    <CounteDownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CounteDownContainer>
  );
}
