import React, { ChangeEvent, FC, MouseEvent, useState } from "react";

interface IProps {
    label: string;
    logo?: string;
    index: number;
    style?: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const ResponseCard: FC<IProps> = ({ label, logo, index, handleChange, style }) => {

    const [selected, setSelected] = useState<any[]>([]);

  const handleSelect = (value) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((val) => val !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

    return (
        <label key={index} className={`py-4 px-1 my-2 flex border-2 border-solid border-[#020B28] focus:border-[#3D83F8] focus:bg-[#3D83F8] rounded-lg ${selected.includes(label) ? 'bg-[#3D83F8] text-white' : ''}`}>
          <input
            type="checkbox"
            value={label}
            checked={selected.includes(label)}
            onChange={handleChange}
            className="hidden"
          />
          {logo && <img src={logo} alt={label} className="w-8 h-8 mx-2" />}
          <span className="mx-2">{label}</span>
        </label>
    );
};