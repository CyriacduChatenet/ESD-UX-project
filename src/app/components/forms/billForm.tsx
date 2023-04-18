import React, { FC, MouseEvent, useState } from "react";
import { useStepHook } from "../../../setup/hooks/useStepIncrement.hook";
import { useUser } from "../../../setup/context/user.context";

export const BillForm: FC = () => {
    const [credentials, setCredentials] = useState({});

    const handleClick = (e: MouseEvent<HTMLButtonElement>,) => {
        e.preventDefault();
        const { value } = e.target as HTMLButtonElement;
        setCredentials({[value]: value.toLowerCase() });
    };

    const { setStep, step, progressBar, setProgressBar } = useUser();
    const useStep = new useStepHook();
    return (
        <div>
            <p className="text-center">Combien votre entreprise dépense-t-elle en prestation de transport ?</p>
        <form action="">
            <button onClick={handleClick}>Logiciel</button>
            <button onClick={handleClick}>Excel</button>
            <button onClick={handleClick}>pas controle</button>
        </form>
        <br />
        <button onClick={(e) => useStep.handleStepDecrement(e, step, setStep, progressBar, setProgressBar)}>previous step</button>
        <br />
        <button onClick={(e) => useStep.handleStepIncrement(e, step, setStep, progressBar, setProgressBar)}>next step</button>
    </div>
    );
};