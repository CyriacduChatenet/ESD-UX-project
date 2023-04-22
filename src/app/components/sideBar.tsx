import React, { FC, useMemo, useState } from "react";
import { useUser } from "../../setup/context/user.context";

export const SideBar: FC = () => {
  const { setStep, step } = useUser();
  const [steps, setSteps] = useState([
    {
      step: 1,
      title: "Expedition",
    },
    {
      step: 2,
      title: "Budget",
    },
    {
      step: 3,
      title: "Transporteurs",
    },
    {
      step: 4,
      title: "International",
    },
    {
      step: 5,
      title: "Contrôle",
    },
    {
      step: 6,
      title: "Résultats",
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    setStep(index + 2);
  };

  useMemo(() => {
    setActiveIndex(step - 2);
  }, [step]);

  return (
    <div className="lg:col-span-3 border-solid border-gray-200 border-r-2 mr-8 h-full">
      <div className="absolute z-10 h-1/2 flex flex-col justify-around items-center text-right">
        {steps.map((stepState, index = 1) => (
          <div
            className={`flex justify-between items-center w-full ${
              activeIndex === index - 1
                ? "text-[#030472] font-medium"
                : "text-black text-opacity-50"
            }`}
            onClick={() => handleClick(index - 1)}
          >
            <div>
              <p className="font-medium">{stepState.title}</p>
              <p className="font-light text-start">Etape {stepState.step}</p>
            </div>
            <div
              className={`w-4 h-4 rounded-full ml-8 ${
                activeIndex === index - 1
                  ? "bg-[#030472] font-medium"
                  : "bg-[#E2ECFE]"
              }`}
            ></div>
          </div>
        ))}
      </div>
      <div className="w-[2px] h-[50vh] bg-[#E2ECFE] bg-opacity-50 relative z-0 left-36"></div>
    </div>
  );
};
