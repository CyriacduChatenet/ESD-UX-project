import React, { FC, MouseEvent } from "react";

import { Layout } from "./components/Layout";
import { useUser } from "../setup/context/user.context";
import { ExpeditionForm } from "./components/forms/expeditionForm";
import { SpendForm } from "./components/forms/spendForm";
import { TransporterForm } from "./components/forms/transporterForm";
import { MultiColisForm } from "./components/forms/multiColis";
import { BillForm } from "./components/forms/billForm";

export const App: FC = () => {
  const { step } = useUser();
  return (
    <Layout>
      <div className="col-span-4">
        <p className="cols-span-4 text-black text-opacity-50">Etape {step}/5</p>
        <br />
        {step === 1 && <ExpeditionForm/>}
        {step === 2 && <SpendForm/>}
        {step === 3 && <TransporterForm/>}
        {step === 4 && <MultiColisForm/>}
        {step === 5 && <BillForm/>}
      </div>
    </Layout>
  );
};
