import React, { FC } from "react";

import { ExpeditionForm } from "./expeditionForm";
import { RegionForm } from "./regionForm";
import { BillForm } from "./billForm";
import { SpendForm } from "./spendForm";
import { TransporterForm } from "./transporterForm";
import { MultiColisForm } from "./multiColis";

interface IProps {
    question: any;
    index: number;
}

export const QuestionCard: FC<IProps> = ({ question, index }) => {
    return (
        <div>
              <p>{question.fields.Question}</p>
              <div>
                {index === 0 ? <MultiColisForm/> : null}
                {index === 1 ? <RegionForm/> : null}
                {index === 2 ? <ExpeditionForm/> : null}
                {index === 3 ? <BillForm/> : null}
                {index === 4 ? <SpendForm/> : null}
                {index === 5 ? <TransporterForm/> : null}
              </div>
            </div>
    );
;};