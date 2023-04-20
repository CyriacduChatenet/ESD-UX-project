import React, {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

type Context = {
  finalScore: number;
  setFinalScore: Dispatch<SetStateAction<number>>;
  defaultScore: number;
  region: number;
  setRegion: Dispatch<SetStateAction<number>>;
  multicolis: number;
  setMulticolis: Dispatch<SetStateAction<number>>;
  courier: number;
  setCourier: Dispatch<SetStateAction<number>>;
  express: number;
  setExpress: Dispatch<SetStateAction<number>>;
  messaging: number;
  setMessaging: Dispatch<SetStateAction<number>>;
  delivery: number;
  setDelivery: Dispatch<SetStateAction<number>>;
  maritime: number;
  setMaritime: Dispatch<SetStateAction<number>>;
  excel: number;
  setExcel: Dispatch<SetStateAction<number>>;
  noControl: number;
  setNoControl: Dispatch<SetStateAction<number>>;
};

const ScoreContext = createContext<Context>({
  finalScore: 0,
  setFinalScore: () => {},
  defaultScore: 2,
  region: 0,
  setRegion: () => {},
  multicolis: 0,
  setMulticolis: () => {},
  courier: 0,
  setCourier: () => {},
  express: 0,
  setExpress: () => {},
  messaging: 0,
  setMessaging: () => {},
  delivery: 0,
  setDelivery: () => {},
  maritime: 0,
  setMaritime: () => {},
  excel: 0,
  setExcel: () => {},
  noControl: 0,
  setNoControl: () => {},
});

export const ScoreProvider: FC = ({ children }: PropsWithChildren) => {
  const [finalScore, setFinalScore] = useState(0);
  const [defaultScore, setDefaultScore] = useState(2);
  const [region, setRegion] = useState(0);
  const [multicolis, setMulticolis] = useState(0);
  const [courier, setCourier] = useState(0);
  const [express, setExpress] = useState(0);
  const [messaging, setMessaging] = useState(0);
  const [delivery, setDelivery] = useState(0);
  const [maritime, setMaritime] = useState(0);
  const [excel, setExcel] = useState(0);
  const [noControl, setNoControl] = useState(0);

  useMemo(() => {
    if(maritime > 0) {
      setFinalScore(maritime);
    } else {
      setFinalScore(region + multicolis + courier + express + messaging + delivery + excel + noControl + defaultScore)
    }
  }, [maritime, region, multicolis, courier, express, messaging, delivery, excel, noControl, defaultScore])

  return (
    <ScoreContext.Provider
      value={{
        finalScore,
        setFinalScore,
        defaultScore,
        region,
        setRegion,
        multicolis,
        setMulticolis,
        courier,
        setCourier,
        express,
        setExpress,
        messaging,
        setMessaging,
        delivery,
        setDelivery,
        maritime,
        setMaritime,
        excel,
        setExcel,
        noControl,
        setNoControl,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
};

export const useScore = () => useContext<Context>(ScoreContext);
