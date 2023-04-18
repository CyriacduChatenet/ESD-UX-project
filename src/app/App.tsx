import React, { FC, useEffect, useState } from "react";

import { AirtableService } from "../setup/services/airtable.service";

export const App: FC = () => {

  const handleFetch = async () => {
    const response = await AirtableService.findAllQuestions();
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
    </div>
  );
};
