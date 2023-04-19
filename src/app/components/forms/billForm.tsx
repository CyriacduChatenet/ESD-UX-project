import React, { FC, MouseEvent, useState } from "react";
import { useStepHook } from "../../../setup/hooks/useStepIncrement.hook";
import { useUser } from "../../../setup/context/user.context";

import facture1 from '../../assets/images/facture1.png'
import facture2 from '../../assets/images/facture2.png'
import facture3 from '../../assets/images/facture3.png'
import { ResponseCard } from "../responseCard";
import { Button } from '../button';

export const BillForm: FC = () => {
    const [credentials, setCredentials] = useState({});

    const { setStep, step, progressBar, setProgressBar } = useUser();
    const useStep = new useStepHook();

    const [response, setResponse] = useState([
        {
          label: "Via logiciel dédié",
          logo: facture1,
        },
        {
          label: "Via Excel",
          logo: facture2,
        },
        {
          label: "Je ne fais pas de contrôle",
          logo: facture3,
        },
      ]);

    const handleClick = (e: MouseEvent<HTMLButtonElement>,) => {
        e.preventDefault();
        const { value } = e.target as HTMLButtonElement;
        setCredentials({[value]: value.toLowerCase() });
    };
    return (
        <div className="grid-cols-4">
            <p className="text-center text-[#022AB1] font-medium text-xl">Combien votre entreprise dépense-t-elle en prestation de transport ?</p>
            <form className="flex flex-col justify-between items-center mt-8" action="">
        {response.map((item, index) => (
          <ResponseCard label={item.label} logo={item.logo} handleClick={handleClick} index={index} style={'lg'} />
        ))}
      </form>
        <br />
        <div className="fixed left-0 right-0 bottom-20 flex justify-around items-center">
        <Button type={"Previous"} />
        <Button type={"Next"} />
      </div>
    </div>
    );
};