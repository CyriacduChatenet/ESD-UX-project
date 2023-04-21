import React, { FC, MouseEvent, useState } from "react";
import { useStepHook } from "../../../setup/hooks/useStepIncrement.hook";
import { useUser } from "../../../setup/context/user.context";
import { ResponseCard } from "../responseCard";
import { Button } from "../button";

export const TransporterForm: FC = () => {
    const { setStep, step, progressBar, setProgressBar } = useUser();
    const useStep = new useStepHook();

    const [response, setResponse] = useState([
        {
          label: "Entre 1 et 5",
          value: "1-5",
        },
        {
          label: "Entre 5 et 10",
          value: "5-10",
        },
        {
          label: "Entre 10 et 20",
          value: "10-20",
        },
        {
          label: "Plus de 20",
          value: "20+",
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
    <div className="">
        <p className="col-span-4 row-span-1 text-[#022AB1] font-medium text-xl">Avec combien de transporteurs travaillez vous ?</p>
        <form action="" className="col-span-4 row-span-1 flex flex-wrap justify-between mt-20">
        {response.map((option) => (
        <label key={option.value} className={`py-4 px-1 my-2 flex border-2 border-solid border-[#020B28] focus:border-[#3D83F8] focus:bg-[#3D83F8] rounded-lg ${selected.includes(option.value) ? 'bg-[#3D83F8] text-white' : ''}`}>
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
        <div className="col-span-4 row-span-1 fixed left-0 right-0 bottom-20 flex justify-around items-center">
        <Button type={"Previous"} />
        <Button type={"Next"} />
      </div>
    </div>
    );
};