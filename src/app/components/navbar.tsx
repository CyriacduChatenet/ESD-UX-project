import React, { FC } from "react";

import logo from '../assets/images/datafret-logo-768x768.png';
import imgPerso1 from '../assets/images/datafret-perso-1.png';
import imgPerso2 from '../assets/images/datafret-perso-2.png';
import imgPerso3 from '../assets/images/datafret-perso-3.png';
import imgPerso4 from '../assets/images/datafret-perso-4.png';
import imgPerso5 from '../assets/images/datafret-perso-5.png';
import { useUser } from "../../setup/context/user.context";

export const Navbar: FC = () => {
    const { step } = useUser();
    return (
        <nav className="col-span-4 h-36 flex items-center xl:col-span-12 xl:border-gray-800 xl:border-solid xl:border-b-2 xl:border-opacity-10">
            <img src={logo} alt="logo" className="col-span-2 xl:w-48" />
            {
            window.innerWidth < 1024 && step === 1 ? <img src={imgPerso1} alt="illustration" className="col-span-2" /> :
            window.innerWidth < 1024 && step === 2 ? <img src={imgPerso2} alt="illustration" className="col-span-2" /> :
            window.innerWidth < 1024 && step === 3 ? <img src={imgPerso3} alt="illustration" className="col-span-2 w-28" /> :
            window.innerWidth < 1024 && step === 4 ? <img src={imgPerso4} alt="illustration" className="col-span-2 w-48" /> :
            window.innerWidth < 1024 && step === 5 ? <img src={imgPerso5} alt="illustration" className="col-span-2 w-48" /> :
             null}
        </nav>
    );
};