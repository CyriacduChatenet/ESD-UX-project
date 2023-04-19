import React, { FC } from "react";
import { useStepHook } from "../../setup/hooks/useStepIncrement.hook";
import { useUser } from "../../setup/context/user.context";

interface IProps {
  type: string;
}

export const Button: FC<IProps> = ({ type }) => {
  const { setStep, step, progressBar, setProgressBar } = useUser();
  const useStep = new useStepHook();

  return (
    <button
      onClick={(e) => {
        if (type === "Next") {
          useStep.handleStepIncrement(
            e,
            step,
            setStep,
            progressBar,
            setProgressBar
          );
        } else {
          useStep.handleStepDecrement(
            e,
            step,
            setStep,
            progressBar,
            setProgressBar
          );
        }
      }}

      className={`${type === 'Next' ? 'bg-[#3D83F8] text-white rounded-full px-10 py-4' : 'bg-white text-[#3D83F8] border rounded-full px-10 py-4 border-white'}`}
    >
      {type == "Next" ? "Suivant" : "Retour"}
    </button>
  );
};
