import React, { FC, PropsWithChildren } from "react";

import { Navbar } from "./navbar";
import { ProgressBar } from "./progressbar";

export const Layout: FC = ({ children}: PropsWithChildren) => {
  return (
    <div className="mx-10 grid grid-cols-4 gap-4 xl:mx-32 xl:grid-cols-12">
    <Navbar/>
    {window.innerWidth < 1024 ? <ProgressBar/> : null}
    <main className="col-span-4 xl:grid-cols-12">
    {children}
    </main>
    </div>
  );
};