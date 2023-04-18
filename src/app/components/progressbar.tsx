import React, { FC } from "react";
import { useUser } from "../../setup/context/user.context";

export const ProgressBar: FC = () => {
  const { step, progressBar } = useUser();

  return (
    <div className="col-span-4 w-full bg-[#E2ECFE] h-1 rounded-xl">
      <div
        className={`bg-gradient-to-r ${
          progressBar == 20
            ? "from-[#02016F] to-[#02016F]"
            : progressBar == 40
            ? "from-[#02016F] to-[#3D83F8]"
            : progressBar == 60
            ? "from-[#02016F] to-[#3D83F8]"
            : progressBar == 80
            ? "from-[#02016F] to-[#61ceac]"
            : progressBar == 100
            ? "from-[#02016F] to-[#61CE70]"
            : "bg-white"
        } h-1 rounded-xl ${progressBar == 20 ? 'w-2/12': progressBar == 40 ? 'w-5/12': progressBar == 60 ? 'w-7/12': progressBar == 80 ? 'w-10/12': progressBar == 100 ? 'w-12/12': 'w-0' }`}
      ></div>
    </div>
  );
};
