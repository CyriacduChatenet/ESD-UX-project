import React, { ChangeEvent, FC, MouseEvent, useEffect, useState } from "react";

import { AirtableService } from "../setup/services/airtable.service";
import { Question } from "../setup/types/question.type";

export const App: FC = () => {
  const [questions, setQuestions] = useState<any>([]);

  const [credentials, setCredentials] = useState({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const {name, value} = e.target;
    setCredentials({...credentials, [name]: value});
  };

  const handleFetch = async () => {
    const response = await AirtableService.findAllQuestions();
    setQuestions(response);
    response.map((question) => {
      console.log(question.fields);
    });
  };

  const handleSubmit = async (e, questionId: string) => {
    e.preventDefault();
    const response = await AirtableService.createAnswer(credentials, questionId);
    console.log(response);
  };

  useEffect(() => {
    handleFetch();
  }, []);
  return (
    <div>
      <h1 className="text-blue-500 font-bold text-6xl">Hello React WP</h1>
      <div className="flex flex-col">
        {questions.map((question) => (
          <div className="flex flex-col">
            <p>{question?.fields?.Question}</p>
            <form action="" onSubmit={(e) => handleSubmit(e, question.id)}>
              <input type="text" name="Answer" placeholder="Enter sentence" onChange={handleChange} />
              <input type="submit" value={'Send'} />
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};
