import React, { ChangeEvent, FC, useState } from "react";

import { AirtableService } from "../../setup/services/airtable.service";
import { useUser } from "../../setup/context/user.context";

interface IProps {
    question: {
        id: string;
    }
}

export const AnswerForm: FC<IProps> = ({ question }) => {
    const [credentials, setCredentials] = useState({});
    const { user } = useUser();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const { name, value } = e.target;
      setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e, questionId: string) => {
        e.preventDefault();
        const response = await AirtableService.createAnswer(
          credentials,
        user,
          questionId
        );
        console.log(response);
      };

    return (
        <form action="" onSubmit={(e) => handleSubmit(e, question.id)}>
        <input
          type="text"
          name="Answer"
          placeholder="Enter sentence"
          onChange={handleChange}
        />
        <input type="submit" value={"Send"} />
      </form>
    );
};