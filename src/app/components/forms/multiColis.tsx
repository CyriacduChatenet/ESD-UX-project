import React, { FC, MouseEvent, useState } from "react";
import { useStepHook } from "../../../setup/hooks/useStepIncrement.hook";
import { useUser } from "../../../setup/context/user.context";
import { ResponseCard } from "../responseCard";
import { Button } from "../button";

import colis1 from '../../assets/images/colis1.png'
import colis2 from '../../assets/images/colis2.png'
import colis3 from '../../assets/images/colis3.png'
import colis4 from '../../assets/images/colis4.png'

export const MultiColisForm: FC = () => {
  const { setStep, step, progressBar, setProgressBar } = useUser();
  const useStep = new useStepHook();

  const [firstResponse, setFirstResponse] = useState([
    {
      label: "oui",
      logo: colis1,
    },
    {
      label: "non",
      logo: colis2,
    }
  ]);

  const [secondResponse, setSecondResponse] = useState([
    {
      label: "oui",
      logo: colis3,
    },
    {
      label: "non",
      logo: colis4,
    }
  ]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };


  return (
    <div>
      <p className="text-center text-[#022AB1] font-medium text-xl">
        Expédiez vous vos colis à l’international ?
      </p>
      <form
        className="flex justify-between flex-wrap items-center mt-8"
        action=""
      >
        {firstResponse.map((item, index) => (
          <ResponseCard
            label={item.label}
            logo={item.logo}
            handleClick={handleClick}
            index={index}
          />
        ))}
      </form>
      <br />
      <p className="text-center text-[#022AB1] font-medium text-xl">
        Faites vous de l’expédition multi-colis ?
      </p>
      <form
        className="flex justify-between flex-wrap items-center mt-8"
        action=""
      >
        {secondResponse.map((item, index) => (
          <ResponseCard
            label={item.label}
            logo={item.logo}
            handleClick={handleClick}
            index={index}
          />
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
