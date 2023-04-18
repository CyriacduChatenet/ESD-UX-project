import React, { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react"
import { Score } from "../enum/score.enum"

type Context = {
    user: any
    setUser: Dispatch<SetStateAction<any>>,
    score: number
    setScore: Dispatch<SetStateAction<number>>
    step: number
    setStep: Dispatch<SetStateAction<number>>
    progressBar: number
    setProgressBar: Dispatch<SetStateAction<number>>
}

const UserContext = createContext<Context>({
    user: {},
    setUser: () => {},
    score: 0,
    setScore: () => {},
    step: 1,
    setStep: () => {},
    progressBar: 20,
    setProgressBar: () => {}
});

export const UserProvider = ({ children }: PropsWithChildren) => {
    const [user, setUser] = useState({});
    const [score, setScore] = useState(Score.DEFAULT);
    const [step, setStep] = useState(1);
    const [progressBar, setProgressBar] = useState(20);

    return (
        <UserContext.Provider value={{ user, setUser, score, setScore, step, setStep, progressBar, setProgressBar }}>
        {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext<Context>(UserContext);