import React, { FC, useEffect, useState } from "react";

import { AirtableService } from "../setup/services/airtable.service";
import { AnswerForm } from "./components/AnswerForm";
import { UserForm } from "./components/UserForm";

export const App: FC = () => {
  const [questions, setQuestions] = useState<any>([]);

  const handleFetch = async () => {
    const response = await AirtableService.findAllQuestions();
    setQuestions(response);
    response.map((question) => {
      console.log(question.fields);
    });
  };

  useEffect(() => {
    handleFetch();
  }, []);
  return (
      <div>
        <h1 className="text-blue-500 font-bold text-6xl">Hello React WP</h1>
        <div className="flex flex-col">
          <UserForm/>
          <br />
          {questions.map((question) => (
            <div className="flex flex-col">
              <p>{question?.fields?.Question}</p>
              <AnswerForm question={question}/>
            </div>
          ))}
        </div>
      </div>
  );
};
