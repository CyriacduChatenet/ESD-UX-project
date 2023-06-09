import React, { FC, useState } from "react";

import { Button } from "../button";
import { useAnswer } from "../../../setup/context/answer.context";

import perso1 from "../../assets/images/datafret-perso-21.png";

export const TransporterForm: FC = () => {
  const { setTransporter } = useAnswer();

  const [response, setResponse] = useState([
    {
      label: "Entre 1 et 5",
      value: 1,
    },
    {
      label: "Entre 5 et 10",
      value: 5,
    },
    {
      label: "Entre 10 et 20",
      value: 10,
    },
    {
      label: "Plus de 20",
      value: 20,
    },
  ]);

  const [selected, setSelected] = useState<any[]>([]);

  const handleSelect = (value) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((val) => val !== value));
    } else {
      setSelected([...selected, value]);
      setTransporter(value);
    }
  };

  return (
    <div className="lg:col-span-6 lg:grid lg:grid-cols-9 h-[60vh">
      <p className="col-span-4 row-span-1 text-[#022AB1] font-medium text-xl lg:text-3xl lg:col-span-9">
        Avec combien de transporteurs travaillez vous ?
      </p>
      {window.innerWidth > 1024 && (
        <div className="lg:absolute lg:z-[-5] lg:bottom-40 lg:right-0 lg:w-96 lg:h-72 lg:flex lg:justify-center lg:items-center">
          <img src={perso1} alt="illus" />
        </div>
      )}
      <form
        action=""
        className="col-span-4 lg:col-span-9 lg:grid lg:grid-cols-6 lg:gap-4 row-span-1 flex flex-wrap justify-around mt-20 lg:mt-30"
      >
        {response.map((option) => (
          <label
            key={option.value}
            className={`flex lg:justify-center lg:items-center lg:h-28 lg:col-span-3 py-4 px-1 my-2 border-2 border-solid border-[#020B28] focus:border-[#3D83F8] focus:bg-[#3D83F8] rounded-lg ${
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
      <div className="col-span-4 row-span-1 fixed left-0 right-0 bottom-20 flex justify-around items-center">
        <Button type={"Previous"} />
        <Button type={"Next"} />
      </div>
    </div>
  );
};
