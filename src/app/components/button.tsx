import React, { FC, MouseEvent } from "react";

import { useStepHook } from "../../setup/hooks/useStepIncrement.hook";
import { useUser } from "../../setup/context/user.context";

interface IProps {
  type: string;
  handleClick?: () => {}
}

export const Button: FC<IProps> = ({ type, handleClick }) => {
  const { setStep, step, progressBar, setProgressBar } = useUser();
  const useStep = new useStepHook();

  const handleName = (type: string) => {
    if(type == "Next") {
      return "Suivant";
    }

    if(type === "Previous") {
      return "Retour"
    }

    if(type === "Envoyer") {
      return "Envoyer"
    }
  };

  return (
    <button
      onClick={(e) => {
        if (type === "Next" || type === "Envoyer") {
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

        if(type === "Envoyer" && handleClick) {
          handleClick();
        }
      }}
      className={`${
        type === "Next" || type === "Envoyer"
          ? "bg-[#3D83F8] text-white rounded-full px-10 py-4"
          : "bg-white text-[#3D83F8] border rounded-full px-10 py-4 border-white"
      }`}
    >
      {handleName(type)}
    </button>
  );
};
