import React, { FC, useState } from "react";

import { useStepHook } from "../../../setup/hooks/useStepIncrement.hook";
import { Button } from "../button";
import { useScore } from "../../../setup/context/score.context";
import { Score } from "../../../setup/enum/score.enum";
import { useAnswer } from "../../../setup/context/answer.context";

import expe1 from "../../assets/images/expe1.png";
import expe2 from "../../assets/images/expe2.png";
import expe3 from "../../assets/images/expe3.png";
import expe4 from "../../assets/images/expe4.png";
import expe5 from "../../assets/images/expe5.png";
import perso1 from "../../assets/images/datafret-perso-11.png";

export const ExpeditionForm: FC = () => {
  const {
    maritime,
    setMaritime,
    setExpress,
    setDelivery,
    setMessaging,
    setCourier,
  } = useScore();

  const { setExpedition, expedition } = useAnswer();

  const [response, setResponse] = useState([
    {
      label: "Coursier",
      value: "coursier",
      logo: expe1,
    },
    {
      label: "Express",
      value: "express",
      logo: expe3,
    },
    {
      label: "Messagerie",
      value: "messagerie",
      logo: expe2,
    },
    {
      label: "Affraitement",
      value: "affraitement",
      logo: expe5,
    },
    {
      label: "Maritime",
      value: "maritime",
      logo: expe4,
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
    <div className="lg:col-span-6 lg:grid lg:grid-cols-9 h-[60vh">
      <p className="col-span-4 row-span-1 text-[#022AB1] text-xl font-medium lg:col-span-9">
        Par quel moyen(s) expédiez-vous vos marchandises ?
      </p>
      {window.innerWidth > 1024 && (
        <div className="lg:absolute lg:z-[-5] lg:bottom-40 lg:right-0 lg:w-96 lg:h-72 lg:flex lg:justify-center lg:items-center">
          <img src={perso1} alt="illus" />
        </div>
      )}
      <form
        className="lg:col-span-9 col-span-4 row-span-1 lg:h-full flex flex-wrap justify-between mt-12 lg:grid lg:grid-cols-6 lg:gap-6"
        action=""
      >
        {response.map((option) => (
          <label
            key={option.value}
            className={`lg:justify-center lg:items-center lg:h-28 lg:col-span-3 py-4 my-2 flex border-2 border-solid border-[#020B28] focus:border-[#3D83F8] focus:bg-[#3D83F8] rounded-lg ${
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

                switch (option.value) {
                  case "coursier":
                    setCourier(Score.COURIER)
                    setExpedition([...expedition, "Coursier"]);
                    break;
                  case "express":
                    setExpress(Score.EXPRESS)
                    setExpedition([...expedition, "Express"]);
                    break;
                  case "messagerie":
                    setMessaging(Score.MESSAGING)
                    setExpedition([...expedition, "Messagerie"]);
                    break;
                  case "affraitement":
                    setDelivery(Score.AFFRER)
                    setExpedition([...expedition, "Affrètement"]);
                    break;
                  case "maritime":
                    setMaritime(Score.MARITIME)
                    setExpedition([...expedition, "Maritime"]);
                    break;
                  default:
                    break;
                }}
              }
              className="hidden"
            />
            {option.logo && (
              <img
                src={option.logo}
                alt={option.label}
                className="w-8 h-8 mx-2"
              />
            )}
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
