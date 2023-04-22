import React, { FC, MouseEvent, useState } from "react";
import { useStepHook } from "../../../setup/hooks/useStepIncrement.hook";
import { useUser } from "../../../setup/context/user.context";
import { ResponseCard } from "../responseCard";
import { Button } from "../button";
import perso1 from "../../assets/images/datafret-perso-21.png";

export const SpendForm: FC = () => {
  const { setStep, step, progressBar, setProgressBar } = useUser();
  const useStep = new useStepHook();

  const [response, setResponse] = useState([
    {
      label: "Moins de 100k",
      value: "100k",
    },
    {
      label: "Entre 100k et 500k",
      value: "500k",
    },
    {
      label: "Entre 500k et 1M",
      value: "1M",
    },
    {
      label: "Plus de 1M",
      value: "1M+",
    },
  ]);

  const [selected, setSelected] = useState<any[]>([]);

  const handleSelect = (value) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((val) => val !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  return (
    <div className="lg:col-span-6 lg:grid lg:grid-cols-9 h-[60vh">
      <p className="text-[#022AB1] font-medium text-xl lg:col-span-9">
        Combien votre entreprise dépense-t-elle en prestation de transport ?
      </p>
      <p className="text-center italic lg:col-span-9">(Annuel, en €)</p>
      {window.innerWidth > 1024 && (
        <div className="lg:absolute lg:z-[-5] lg:bottom-40 lg:right-0 lg:w-96 lg:h-72 lg:flex lg:justify-center lg:items-center">
          <img src={perso1} alt="illus" />
        </div>
      )}
      <form
        action=""
        className="lg:col-span-9 lg:grid lg:grid-cols-6 lg:gap-4 col-span-4 row-span-1 flex flex-wrap justify-between mt-8"
      >
        {response.map((option) => (
          <label
            key={option.value}
            className={`lg:justify-center lg:items-center lg:h-28 lg:col-span-3 py-4 px-1 my-2 flex border-2 border-solid border-[#020B28] focus:border-[#3D83F8] focus:bg-[#3D83F8] rounded-lg ${
              selected.includes(option.value)
                ? "text-[#3D83F8] bg-white border-[#3D83F8]"
                : ""
            }`}
          >
            <input
              type="checkbox"
              value={option.value}
              checked={selected.includes(option.value)}
              onChange={() => {
                handleSelect(option.value);
              }}
              className="hidden"
            />
            <span className="mx-2">{option.label}</span>
          </label>
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
