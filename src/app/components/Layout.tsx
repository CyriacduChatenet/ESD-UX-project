import React, { FC, PropsWithChildren } from "react";

import { Navbar } from "./navbar";
import { ProgressBar } from "./progressbar";

export const Layout: FC = ({ children }: PropsWithChildren) => {
  return (
    <div className="mx-10 lg:mx-32 grid grid-cols-4 lg:grid-cols-12 grid-rows-6 lg:h-screen">
      <div className="col-span-4 lg:col-span-12 row-span-1 lg:row-span-1">
      <Navbar />
        {window.innerWidth < 1024 ? <ProgressBar /> : null}
      </div>
      <main className="col-span-4 lg:col-span-12 row-span-3 lg:row-span-5">
        {children}
      </main>
    </div>
  );
};
