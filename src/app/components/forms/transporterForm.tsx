import React, { FC } from "react";
import { useStepHook } from "../../../setup/hooks/useStepIncrement.hook";
import { useUser } from "../../../setup/context/user.context";

export const TransporterForm: FC = () => {
    const { setStep, step, progressBar, setProgressBar } = useUser();
    const useStep = new useStepHook();
    return (
    <div>
            <p className="text-[#022AB1] text-center font-medium text-xl">Combien votre entreprise dépense-t-elle en prestation de transport ?</p>
        <form action="">
            <button>1 et 5</button>
            <button>5 et 10</button>
            <button>10 et 20</button>
            <button>+ 20</button>
        </form>
        <br />
        <button onClick={(e) => useStep.handleStepDecrement(e, step, setStep, progressBar, setProgressBar)}>previous step</button>
        <br />
        <button onClick={(e) => useStep.handleStepIncrement(e, step, setStep, progressBar, setProgressBar)}>next step</button>
    </div>
    );
};