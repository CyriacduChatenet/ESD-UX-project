import React from "react";
import ReactDOM from "react-dom";

import { App } from "./app/App";
import { UserProvider } from "./setup/context/user.context";
import { ScoreProvider } from "./setup/context/score.context";
import { AnswerProvider } from "./setup/context/answer.context";

ReactDOM.render(
  <UserProvider>
    <ScoreProvider>
      <AnswerProvider>
        <App />
      </AnswerProvider>
    </ScoreProvider>
  </UserProvider>,
  document.querySelector("#root")
);
