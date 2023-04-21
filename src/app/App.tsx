import React, { FC, MouseEvent } from "react";

import { Layout } from "./components/Layout";
import { useUser } from "../setup/context/user.context";
import { ExpeditionForm } from "./components/forms/expeditionForm";
import { SpendForm } from "./components/forms/spendForm";
import { TransporterForm } from "./components/forms/transporterForm";
import { MultiColisForm } from "./components/forms/multiColis";
import { BillForm } from "./components/forms/billForm";
import { SideBar } from "./components/sideBar";
import EmailForm from "./components/forms/emailForm";

export const App: FC = () => {
  const { step } = useUser();
  return (
    <Layout>
      <>
      {step < 6 && <p className="text-black text-opacity-50 lg:hidden">Etape {step}/5</p>}
        <br />
        <div className="lg:col-span-12 lg:grid lg:grid-cols-12">
          {window.innerWidth > 1024 && <SideBar />}
          {step === 1 && <ExpeditionForm />}
          {step === 2 && <SpendForm />}
          {step === 3 && <TransporterForm />}
          {step === 4 && <MultiColisForm />}
          {step === 5 && <BillForm />}
          {step === 6 && <EmailForm />}
        </div>
      </>
    </Layout>
  );
};
