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
import { useScore } from "../../../setup/context/score.context";
import { Score } from "../../../setup/enum/score.enum";

export const ExpeditionForm: FC = () => {
  const { setStep, step, progressBar, setProgressBar } = useUser();
  const {
    maritime,
    setMaritime,
    setExpress,
    setDelivery,
    setMessaging,
    setCourier,
  } = useScore();

  const [response, setResponse] = useState([
    {
      label: "Coursier",
      value: 'coursier',
      logo: expe1,
    },
    {
      label: "Messagerie",
      value: "messagerie",
      logo: expe2,
    },
    {
      label: "Express",
      value: "express",
      logo: expe3,
    },
    {
      label: "Maritime",
      value: "maritime",
      logo: expe4,
    },
    {
      label: "Affraitement",
      value: "affraitement",
      logo: expe5,
    },
  ]);

  const useStep = new useStepHook();

  const [selected, setSelected] = useState<any[]>([]);

  const handleSelect = (value) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((val) => val !== value));
    } else {
      setSelected([...selected, value]);
    }
  };



  return (
    <div className="lg:col-span-9 lg:ml-20 lg:mt-10">
      <p className="col-span-4 row-span-1 text-[#022AB1] text-xl font-medium lg:mb-8">
        Par quel moyen(s) expédiez-vous vos marchandises ?
      </p>
      <form
        className="col-span-4 lg:col-span-9 row-span-1 lg:h-full flex flex-wrap justify-between mt-12"
        action=""
      >
         {response.map((option) => (
        <label key={option.value} className={`py-4 px-1 my-2 flex border-2 border-solid border-[#020B28] focus:border-[#3D83F8] focus:bg-[#3D83F8] rounded-lg ${selected.includes(option.value) ? 'bg-[#3D83F8] text-white' : ''}`}>
          <input
            type="checkbox"
            value={option.value}
            checked={selected.includes(option.value)}
            onChange={() => {
              handleSelect(option.value)
              option.label === "Coursier" && maritime === 0 ? setCourier(Score.COURIER): null;
              option.label === "Messagerie" && maritime === 0 ? setMessaging(Score.MESSAGING): null;
              option.label === "Express" && maritime === 0 ? setExpress(Score.EXPRESS): null;
              option.label === "Maritime" ? setMaritime(Score.MARITIME): null;
              option.label === "Affraitement" && maritime === 0 ? setDelivery(Score.AFFRER): null;
            }}
            className="hidden"
          />
          {option.logo && <img src={option.logo} alt={option.label} className="w-8 h-8 mx-2" />}
          <span className="mx-2">{option.label}</span>
        </label>
      ))}
        {/* {response.map((item, index) => (
          <ResponseCard
            label={item.label}
            logo={item.logo}
            handleClick={() => {
              item.label === "Coursier" && maritime === 0 ? setCourier(Score.COURIER): null;
              item.label === "Messagerie" && maritime === 0 ? setMessaging(Score.MESSAGING): null;
              item.label === "Express" && maritime === 0 ? setExpress(Score.EXPRESS): null;
              item.label === "Maritime" ? setMaritime(Score.MARITIME): null;
              item.label === "Affraitement" && maritime === 0 ? setDelivery(Score.AFFRER): null;
            }}
            index={index}
          />
        ))} */}
      </form>
      <br />
      <div className="col-span-4 lg:grid-col-span-9 row-span-1 fixed left-0 right-0 bottom-20 flex justify-around items-center">
        <Button type={"Previous"} />
        <Button type={"Next"} />
      </div>
    </div>
  );
};
