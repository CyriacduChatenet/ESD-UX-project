import React, { FC, MouseEvent, useState } from "react";

interface IProps {
    label: string;
    logo?: string;
    index: number;
    style?: string;
    handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

export const ResponseCard: FC<IProps> = ({ label, logo, index, handleClick, style }) => {
    const [selected, setSelected] = useState(false);

    const handleSelect = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setSelected(false);
        setSelected(true);
        handleClick(e);
    };

    return (
        <button className={`px-5 py-5 lg:w-80 flex justify-between lg:justify-around items-center border-2 border-solid border-[#020B28] focus:border-[#3D83F8] focus:bg-[#3D83F8] rounded-lg my-4`} onClick={handleSelect}>
            {logo && <img src={logo} alt={label} />}
            <p className={`mx-1 ${selected ? 'text-white' : 'text-[#020B28]'}`}>{label === "Entre 100k et 500k" ? <span>Entre 100k et <br/> 500k</span> : label}</p>
        </button>
    );
};