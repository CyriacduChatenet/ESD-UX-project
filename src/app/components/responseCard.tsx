import React, { FC, MouseEvent } from "react";

interface IProps {
    label: string;
    logo: string;
    handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

export const ResponseCard: FC<IProps> = ({ label, logo }) => {
    return (
        <button>
            <img src={logo} alt={label} />
            <p>{label}</p>
        </button>
    );
};