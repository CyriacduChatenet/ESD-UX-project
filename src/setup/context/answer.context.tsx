import React, {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type Context = {
  expedition: string[];
  setExpedition: Dispatch<SetStateAction<string[]>>;
  spend: number;
  setSpend: Dispatch<SetStateAction<number>>;
  transporter: number;
  setTransporter: Dispatch<SetStateAction<number>>;
  international: boolean;
  setInternational: Dispatch<SetStateAction<boolean>>;
  multiColis: boolean;
  setMultiColis: Dispatch<SetStateAction<boolean>>;
  control: string;
  setControl: Dispatch<SetStateAction<string>>;
};

const answerContext = createContext<Context>({
  expedition: [],
  setExpedition: () => {},
  spend: 0,
  setSpend: () => {},
  transporter: 0,
  setTransporter: () => {},
  international: false,
  setInternational: () => {},
  multiColis: false,
  setMultiColis: () => {},
  control: "",
  setControl: () => {},
});

export const AnswerProvider = ({ children }: PropsWithChildren) => {
  const [expedition, setExpedition] = useState<string[]>([]);
  const [spend, setSpend] = useState<number>(0);
  const [transporter, setTransporter] = useState<number>(0);
  const [international, setInternational] = useState<boolean>(false);
  const [multiColis, setMultiColis] = useState<boolean>(false);
  const [control, setControl] = useState<string>("");

  return (
    <answerContext.Provider
      value={{
        expedition,
        setExpedition,
        spend,
        setSpend,
        transporter,
        setTransporter,
        international,
        setInternational,
        multiColis,
        setMultiColis,
        control,
        setControl,
      }}
    >
      {children}
    </answerContext.Provider>
  );
};

export const useAnswer = () => useContext<Context>(answerContext);
