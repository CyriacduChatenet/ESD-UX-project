import React, { FC } from "react";

import { useUser } from "../../setup/context/user.context";

import logo from '../assets/images/datafret-logo-768x768.png';
import logoLg from '../assets/images/datafret-logo-768x768-lg.png';
import imgPerso1 from '../assets/images/datafret-perso-1.png';
import imgPerso2 from '../assets/images/datafret-perso-2.png';
import imgPerso3 from '../assets/images/datafret-perso-3.png';
import imgPerso4 from '../assets/images/datafret-perso-4.png';
import imgPerso5 from '../assets/images/datafret-perso-5.png';
import imgPerso6 from '../assets/images/datafret-perso-6.png';

export const Navbar: FC = () => {
    const { step } = useUser();
    return (
        <nav className="mx-2 col-span-4 row-span-1 h-full flex lg:justify-start justify-around items-center lg:border-gray-200  lg:border-solid lg:border-b-2">
            {window.innerWidth < 768 ? <img src={logo} alt="logo" className="" /> : <img src={logoLg} alt="logo" className="" />}
            {
            window.innerWidth < 1024 && step === 1 ? <img src={imgPerso1} alt="illustration" className="" /> :
            window.innerWidth < 1024 && step === 2 ? <img src={imgPerso2} alt="illustration" className="" /> :
            window.innerWidth < 1024 && step === 3 ? <img src={imgPerso3} alt="illustration" className="" /> :
            window.innerWidth < 1024 && step === 4 ? <img src={imgPerso4} alt="illustration" className="" /> :
            window.innerWidth < 1024 && step === 5 ? <img src={imgPerso5} alt="illustration" className="" /> :
            window.innerWidth < 1024 && step === 6 ? <img src={imgPerso6} alt="illustration" className="" /> :
             null}
        </nav>
    );
};