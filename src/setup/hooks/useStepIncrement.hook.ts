import { Dispatch, MouseEvent, SetStateAction } from "react";

export class useStepHook {
  handleStepIncrement = (
    e: MouseEvent<HTMLButtonElement>,
    step: number,
    setStep: Dispatch<SetStateAction<number>>,
    progressBar: number,
    setProgressBar: Dispatch<SetStateAction<number>>
  ) => {
    e.preventDefault();
    if (step < 6) {
      setStep((prevState) => (prevState += 1));
    }
    if (progressBar < 100) {
      setProgressBar((prevState) => (prevState += 20));
    }
  };

  handleStepDecrement = (
    e: MouseEvent<HTMLButtonElement>,
    step: number,
    setStep: Dispatch<SetStateAction<number>>,
    progressBar: number,
    setProgressBar: Dispatch<SetStateAction<number>>
  ) => {
    e.preventDefault();
    if (step > 1) {
      setStep((prevState) => (prevState -= 1));
    }
    if (progressBar > 20) {
      setProgressBar((prevState) => (prevState -= 20));
    }
  };
}
