import React, { FC, MouseEvent, useState } from "react";

import facture1 from '../../assets/images/facture1.png'
import facture2 from '../../assets/images/facture2.png'
import facture3 from '../../assets/images/facture3.png'
import { ResponseCard } from "../responseCard";
import { Button } from '../button';
import { useScore } from '../../../setup/context/score.context';
import { Score } from "../../../setup/enum/score.enum";

export const BillForm: FC = () => {
    const { setExcel, setNoControl, maritime } = useScore()
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

    const handleClick = (e: MouseEvent<HTMLButtonElement>,) => {
        e.preventDefault();
        const { value } = e.target as HTMLButtonElement;
        setCredentials({[value]: value });
    };
    
    const [selected, setSelected] = useState<any[]>([]);

    const handleSelect = (e, value) => {
      if (selected.includes(value)) {
        setSelected(selected.filter((val) => val !== value));
      } else {
        setSelected([...selected, value]);
        const { value2 } = e.target;
        setCredentials({[value2]: value2 });
      }
    };
    return (
        <div className="lg:col-span-9 lg:ml-20 lg:mt-10">
            <p className="col-span-4 row-span-1 text-[#022AB1] font-medium text-xl">Combien votre entreprise dépense-t-elle en prestation de transport ?</p>
            <form className="col-span-4 row-span-1 flex flex-col items-center justify-around" action="">
            {response.map((option) => (
        <label key={option.value} className={`py-4 px-1 my-2 flex border-2 border-solid border-[#020B28] focus:border-[#3D83F8] focus:bg-[#3D83F8] rounded-lg ${selected.includes(option.value) ? 'bg-[#3D83F8] text-white' : ''}`}>
          <input
            type="checkbox"
            value={option.value}
            checked={selected.includes(option.value)}
            onChange={(e) => {
              handleSelect(e, option.value);
              option.label === "Via Excel" && maritime === 0 ? setExcel(Score.EXCEL) : null
              option.label === "Je ne fais pas de contrôle" && maritime === 0 ? setNoControl(Score.NO_CONTROL) : null
            }}
            className="hidden"
          />
          <span className="mx-2">{option.label}</span>
        </label>
      ))}
        {/* {response.map((item, index) => (
          <div key={index}>
            <ResponseCard 
            label={item.label} 
            logo={item.logo} 
            handleClick={(e) => {
              handleClick(e)
              item.label === "Via Excel" && maritime === 0 ? setExcel(Score.EXCEL) : null
              item.label === "Je ne fais pas de contrôle" && maritime === 0 ? setNoControl(Score.NO_CONTROL) : null
            }
            } 
            index={index} 
            style={'lg'} />
          </div>
        ))} */}
      </form>
        <br />
        <div className="col-span-4 row-span-1">
        <Button type={"Previous"} />
        <Button type={"Next"} />
      </div>
    </div>
    );
};