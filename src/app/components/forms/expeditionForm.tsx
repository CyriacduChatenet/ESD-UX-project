import React, { FC, MouseEvent, useState } from "react";
import { useUser } from "../../../setup/context/user.context";
import { useStepHook } from "../../../setup/hooks/useStepIncrement.hook";
import { ResponseCard } from "../responseCard";

import expe1 from "../../assets/images/expe1.png";
import expe2 from "../../assets/images/expe2.png";
import expe3 from "../../assets/images/expe3.png";
import expe4 from "../../assets/images/expe4.png";
import expe5 from "../../assets/images/expe5.png";
import { Button } from "../button";

export const ExpeditionForm: FC = () => {
  const { setStep, step, progressBar, setProgressBar } = useUser();
  const [response, setResponse] = useState([
    {
      label: "Coursier",
      logo: expe1,
    },
    {
      label: "Messagerie",
      logo: expe2,
    },
    {
      label: "Express",
      logo: expe3,
    },
    {
      label: "Maritime",
      logo: expe4,
    },
    {
      label: "Affraitement",
      logo: expe5,
    },
  ]);

  const useStep = new useStepHook();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div className="grid-cols-4">
      <p className="text-center text-[#022AB1] text-xl font-medium">
        Par quel moyen(s) expédiez-vous vos marchandises ?
      </p>
      <form
        className="flex justify-between flex-wrap items-center mt-8"
        action=""
      >
        {response.map((item, index) => (
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
