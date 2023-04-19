import React, { FC, MouseEvent, useState } from "react";
import { useStepHook } from "../../../setup/hooks/useStepIncrement.hook";
import { useUser } from "../../../setup/context/user.context";
import { ResponseCard } from "../responseCard";
import { Button } from "../button";

export const SpendForm: FC = () => {
  const { setStep, step, progressBar, setProgressBar } = useUser();
  const useStep = new useStepHook();

  const [response, setResponse] = useState([
    {
      label: "Moins de 100k",
    },
    {
      label: "Entre 100k et 500k",
    },
    {
      label: "Entre 500k et 1M",
    },
    {
      label: "Plus de 1M",
    },
  ]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div className="lg:col-span-9 lg:ml-20 lg:mt-10">
      <p className="text-[#022AB1] font-medium text-xl">
        Combien votre entreprise dépense-t-elle en prestation de transport ?
      </p>
      <p className="text-center italic">(Annuel, en €)</p>
      <form action="" className="col-span-4 lg:grid-col-span-9 row-span-1 flex flex-wrap">
        {response.map((item, index) => (
          <ResponseCard
            label={item.label}
            handleClick={handleClick}
            index={index}
          />
        ))}
      </form>
      <br />
      <div className="fixed left-0 right-0 bottom-20 flex justify-around items-center lg:grid-col-span-9">
        <Button type={"Previous"} />
        <Button type={"Next"} />
      </div>
    </div>
  );
};
