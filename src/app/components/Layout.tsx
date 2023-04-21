import React, { FC, PropsWithChildren } from "react";

import { Navbar } from "./navbar";
import { ProgressBar } from "./progressbar";
import { useUser } from "../../setup/context/user.context";

export const Layout: FC = ({ children }: PropsWithChildren) => {
  const { step } = useUser();
  return (
    <div className="mx-10 grid grid-cols-4 grid-rows-6 overflow-y-hidden">
      <div className="col-span-4 row-span-1">
      <Navbar />
        {window.innerWidth < 1024 && step < 6 ? <ProgressBar /> : null}
      </div>
      <main className="col-span-4 row-span-3">
        {children}
      </main>
    </div>
  );
};
