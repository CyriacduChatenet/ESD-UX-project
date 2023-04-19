import React, { FC } from "react";
import { useStepHook } from "../../../setup/hooks/useStepIncrement.hook";
import { useUser } from "../../../setup/context/user.context";

export const SpendForm: FC = () => {
    const { setStep, step, progressBar, setProgressBar } = useUser();
    const useStep = new useStepHook();
    return (
        <div>
            <p className="text-center text-[#022AB1] font-medium text-xl">Combien votre entreprise dépense-t-elle en prestation de transport ?</p>
            <p>(Annuel, en €)</p>
            <form action="">
            <button>-100k</button>
            <button>100-500k</button>
            <button>500k-1M</button>
            <button>+1M</button>
        </form>
        <br />
      <button onClick={(e) => useStep.handleStepDecrement(e, step, setStep, progressBar, setProgressBar)}>previous step</button>
        <br />
        <button onClick={(e) => useStep.handleStepIncrement(e, step, setStep, progressBar, setProgressBar)}>next step</button>
        </div>
    );
};