import React, { FC, MouseEvent, useState } from "react";
import { useUser } from "../../../setup/context/user.context";
import { useStepHook } from "../../../setup/hooks/useStepIncrement.hook";
import { ResponseCard } from "../responseCard";

export const ExpeditionForm: FC = () => {
  const { setStep, step, progressBar, setProgressBar } = useUser();
  const [response, setResponse] = useState([
    {
      label: "Coursier",
      logo: "",
    },
    {
      label: "Messagerie",
      logo: "",
    },
    {
      label: "Express",
      logo: "",
    },
    {
      label: "Maritime",
      logo: "",
    },
    {
      label: "Affraitement",
      logo: "",
    },
  ]);

  const useStep = new useStepHook();
  return (
    <div>
      <p className="text-center text-[#022AB1] text-xl font-medium">
        Par quel moyen(s) expédiez-vous vos marchandises ?
      </p>
      <form className="flex justify-between flex-wrap" action="">
        {response.map((item, index) => (
          <ResponseCard label={item.label} logo={item.logo} handleClick={() => {}} />
        ))}
      </form>
      <br />
      <button
        onClick={(e) =>
          useStep.handleStepDecrement(
            e,
            step,
            setStep,
            progressBar,
            setProgressBar
          )
        }
      >
        previous step
      </button>
      <br />
      <button
        onClick={(e) =>
          useStep.handleStepIncrement(
            e,
            step,
            setStep,
            progressBar,
            setProgressBar
          )
        }
      >
        next step
      </button>
    </div>
  );
};
