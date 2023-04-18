import Airtable from "airtable";

import { REACT_APP_AIRTABLE_API_KEY, REACT_APP_AIRTABLE_BASE_ID } from "../../../env";
import { Answer } from "../types/answer.type";
import { Question } from "../types/question.type";

const dbConnection = () => {
  const airtable = new Airtable({
    endpointUrl: "https://api.airtable.com",
    apiKey: REACT_APP_AIRTABLE_API_KEY,
  }).base(`${REACT_APP_AIRTABLE_BASE_ID}`);
  return airtable;
};

const findAllAnswer = async () => {
    const base = dbConnection();
    return base('Answer').select().all()
};

const findAllQuestions = async () => {
    const base = dbConnection();
    return base('Question').select().all()
};

const findOneAnswer = async (id: string) => {
    const base = dbConnection();
    return base('Answer').find(id)
};

const findOneQuestion = async (id: string) => {
    const base = dbConnection();
    return base('Question').find(id)
};

const createAnswer = async (data: Answer) => {
    const base = dbConnection();
    return base('Answer').create(data)
};

const createQuestion = async (data: Question) => {
    const base = dbConnection();
    return base('Answer').create(data)
};

const updateAnswer = async (id: string, data: Partial<Answer>) => {
    const base = dbConnection();
    return base('Answer').update(id, data);
};

const updateQuestion = async (id: string, data: Partial<Question>) => {
    const base = dbConnection();
    return base('Question').update(id, data);
};

const removeAnswer = async (id: string) => {
    const base = dbConnection();
    return base('Answer').destroy(id);
};

const removeQuestion = async (id: string) => {
    const base = dbConnection();
    return base('Question').destroy(id);
};

export const AirtableService = {
  dbConnection,
  findAllAnswer,
  findAllQuestions,
  findOneAnswer,
  findOneQuestion,
  createAnswer,
  createQuestion,
  updateAnswer,
  updateQuestion,
  removeAnswer,
  removeQuestion,
};
