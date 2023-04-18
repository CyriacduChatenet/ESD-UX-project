import React, { FC, MouseEvent } from "react";
import { useUser } from "../../../setup/context/user.context";
import { useStepHook } from "../../../setup/hooks/useStepIncrement.hook";

export const ExpeditionForm: FC = () => {
    const { setStep, step, progressBar, setProgressBar } = useUser();

    const useStep = new useStepHook();
  return (
    <div>
      <p>Par quel moyen(s) expédiez-vous vos marchandises ?</p>
      <form action="">
      </form>
      <br />
      <button onClick={(e) => useStep.handleStepDecrement(e, step, setStep, progressBar, setProgressBar)}>previous step</button>
        <br />
        <button onClick={(e) => useStep.handleStepIncrement(e, step, setStep, progressBar, setProgressBar)}>next step</button>
    </div>
  );
};
