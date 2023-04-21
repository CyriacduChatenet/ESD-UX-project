import React, { FC, useState } from "react";
import { useScore } from "../../../setup/context/score.context";
import { ResponseCard } from "../responseCard";
import { Button } from "../button";
import { Score } from "../../../setup/enum/score.enum";

import colis1 from '../../assets/images/colis1.png'
import colis2 from '../../assets/images/colis2.png'
import colis3 from '../../assets/images/colis3.png'
import colis4 from '../../assets/images/colis4.png'

export const MultiColisForm: FC = () => {
  const { setRegion, setMulticolis, maritime } = useScore();

  const [firstResponse, setFirstResponse] = useState([
    {
      label: "oui",
      value: "oui",
      logo: colis1,
    },
    {
      label: "non",
      value: "non",
      logo: colis2,
    }
  ]);

  const [secondResponse, setSecondResponse] = useState([
    {
      label: "oui",
      value: "oui",
      logo: colis3,
    },
    {
      label: "non",
      value: "non",
      logo: colis4,
    }
  ]);

  const [selected, setSelected] = useState<any[]>([]);
  const [selectedSecond, setSelectedSecond] = useState<any[]>([]);

  const handleSelect = (value) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((val) => val !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  const handleSelectSecond = (value) => {
    if (selectedSecond.includes(value)) {
      setSelectedSecond(selectedSecond.filter((val) => val !== value));
    } else {
      setSelectedSecond([...selected, value]);
    }
  };


  return (
    <div className="lg:col-span-9 lg:grid lg:grid-cols-9 h-[60vh]">
      <p className=" text-[#022AB1] font-medium text-xl lg:col-span-9">
        Expédiez vous vos colis à l’international ?
      </p>
      <form
        className="col-span-4 lg:col-span-9 lg:grid lg:grid-cols-6 lg:gap-4 row-span-1 flex flex-wrap justify-between items-center mt-4"
        action=""
      >
         {firstResponse.map((option) => (
        <label key={option.value} className={`lg:col-span-3 py-4 px-1 my-2 flex border-2 border-solid border-[#020B28] focus:border-[#3D83F8] focus:bg-[#3D83F8] rounded-lg ${selected.includes(option.value) ? 'bg-[#3D83F8] text-white' : ''}`}>
          <input
            type="checkbox"
            value={option.value}
            checked={selected.includes(option.value)}
            onChange={() => { 
              option.label === "oui" && maritime === 0 ? setRegion(Score.INTERNATIONAL_ONLY) : null;
              handleSelect(option.value)
            }}
            className="hidden"
          />
          {option.logo && <img src={option.logo} alt={option.label} className="w-8 h-8 mx-2" />}
          <span className="mx-2">{option.label}</span>
        </label>
      ))}
      </form>
      <br />
      <p className=" text-[#022AB1] font-medium text-xl lg:col-span-9">
        Faites vous de l’expédition multi-colis ?
      </p>
      <p className="italic mb-2 lg:col-span-9"><span className="underline font-bold">Multi-colis</span> : Le transporteur accepte plusieurs colis, dit aussi envoi ou lot, soit un ensemble de colis remis en même temps et devant arriver ensemble chez le même destinataire.</p>
      <form
        className="lg:col-span-9 lg:grid lg:grid-cols-6 lg:gap-4 col-span-4 row-span-1 flex flex-wrap justify-between items-center"
        action=""
      >
        {secondResponse.map((option) => (
        <label key={option.value} className={`lg:col-span-3 py-4 px-1 my-2 flex border-2 border-solid border-[#020B28] focus:border-[#3D83F8] focus:bg-[#3D83F8] rounded-lg ${selectedSecond.includes(option.value) ? 'bg-[#3D83F8] text-white' : ''}`}>
          <input
            type="checkbox"
            value={option.value}
            checked={selectedSecond.includes(option.value)}
            onChange={() => { option.label === "oui" && maritime === 0 ? setMulticolis(Score.MULTI_PACKAGE) : null;
              handleSelectSecond(option.value)
            }}
            className="hidden"
          />
          {option.logo && <img src={option.logo} alt={option.label} className="w-8 h-8 mx-2" />}
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
