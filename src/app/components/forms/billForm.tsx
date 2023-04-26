import React, { FC, MouseEvent, useState } from "react";

import { Button } from "../button";
import { useScore } from "../../../setup/context/score.context";
import { Score } from "../../../setup/enum/score.enum";
import { useAnswer } from "../../../setup/context/answer.context";

import facture1 from "../../assets/images/facture1.png";
import facture2 from "../../assets/images/facture2.png";
import facture3 from "../../assets/images/facture3.png";
import perso1 from "../../assets/images/datafret-perso-41.png";

export const BillForm: FC = () => {
  const { setExcel, setNoControl, maritime } = useScore();
  const { setControl } = useAnswer();
  const [credentials, setCredentials] = useState({});

  const [response, setResponse] = useState([
    {
      label: "Via logiciel dédié",
      logo: facture1,
      value: "logiciel",
    },
    {
      label: "Via Excel",
      logo: facture2,
      value: "excel",
    },
    {
      label: "Je ne fais pas de contrôle",
      logo: facture3,
      value: "noControl",
    },
  ]);

  const [selected, setSelected] = useState<any[]>([]);

  const handleSelect = (e, value) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((val) => val !== value));
    } else {
      setSelected([...selected, value]);
      const { value2 } = e.target;
      setCredentials({ [value2]: value2 });
    }
  };
  return (
    <div className="lg:col-span-6 lg:grid lg:grid-cols-9 lg:h-[60vh]">
      <p className="col-span-4 row-span-1 text-[#022AB1] font-medium text-xl lg:col-span-9">
        Combien votre entreprise dépense-t-elle en prestation de transport ?
      </p>
      {window.innerWidth > 1024 && (
        <div className="lg:absolute lg:z-[-5] lg:bottom-40 lg:right-0 lg:w-96 lg:h-72 lg:flex lg:justify-center lg:items-center">
          <img src={perso1} alt="illus" />
        </div>
      )}
      <form
        className="lg:col-span-9 lg:grid lg:grid-cols-12 lg:gap-4 col-span-4 row-span-2 flex flex-col items-center justify-around mt-8"
        action=""
      >
        {response.map((option) => (
          <label
            key={option.value}
            className={`lg:h-28 lg:justify-center items-center lg:col-span-4 py-4 px-1 my-2 flex border-2 border-solid border-[#020B28] focus:border-[#3D83F8] focus:bg-[#3D83F8] rounded-lg ${
              selected.includes(option.value)
                ? "text-[#3D83F8] bg-white border-[#3D83F8]"
                : ""
            }`}
          >
            <input
              type="checkbox"
              value={option.value}
              checked={selected.includes(option.value)}
              onChange={(e) => {
                handleSelect(e, option.value);
                switch (option.value) {
                  case "logiciel":
                    setControl("Via logiciel dédié");
                    break;
                  case "excel":
                    setControl("Via Excel");
                    setExcel(Score.EXCEL);
                    break;
                  case "noControl":
                    setControl("Je ne fais pas de contrôle");
                    setNoControl(Score.NO_CONTROL);
                    break;
                  default:
                    break;
                }
              }}
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
