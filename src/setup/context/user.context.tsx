import React, { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react"
import { Score } from "../enum/score.enum"

type Context = {
    step: number
    setStep: Dispatch<SetStateAction<number>>
    progressBar: number
    setProgressBar: Dispatch<SetStateAction<number>>
}

const UserContext = createContext<Context>({
    step: 1,
    setStep: () => {},
    progressBar: 20,
    setProgressBar: () => {}
});

export const UserProvider = ({ children }: PropsWithChildren) => {
    const [step, setStep] = useState(1);
    const [progressBar, setProgressBar] = useState(20);

    return (
        <UserContext.Provider value={{ step, setStep, progressBar, setProgressBar }}>
        {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext<Context>(UserContext);