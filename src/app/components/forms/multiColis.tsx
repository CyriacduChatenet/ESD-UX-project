import React, { FC } from "react";
import { useStepHook } from "../../../setup/hooks/useStepIncrement.hook";
import { useUser } from "../../../setup/context/user.context";

export const MultiColisForm: FC = () => {
    const { setStep, step, progressBar, setProgressBar } = useUser();
    const useStep = new useStepHook();

    return (
        <div>
            <p className="text-center text-[#022AB1] font-medium text-xl">Expédiez vous vos colis à l’international ?</p>
        <form action="">
            <button>oui</button>
            <button>non</button>
        </form>
        <br />
        <p className="text-center text-[#022AB1] font-medium text-xl">Faites vous de l’expédition multi-colis ?</p>
        <form action="">
            <button>oui</button>
            <button>non</button>
        </form>
        <br />
        <button onClick={(e) => useStep.handleStepDecrement(e, step, setStep, progressBar, setProgressBar)}>previous step</button>
        <br />
        <button onClick={(e) => useStep.handleStepIncrement(e, step, setStep, progressBar, setProgressBar)}>next step</button>
    </div>
    );
};