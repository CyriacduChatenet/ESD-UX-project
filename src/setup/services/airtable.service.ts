import Airtable from "airtable";

import {
  REACT_APP_AIRTABLE_API_KEY,
  REACT_APP_AIRTABLE_BASE_ID,
} from "../../../env";
import { Answer } from "../types/answer.type";

const dbConnection = () => {
  const airtable = new Airtable({
    endpointUrl: "https://api.airtable.com",
    apiKey: REACT_APP_AIRTABLE_API_KEY,
  }).base(`${REACT_APP_AIRTABLE_BASE_ID}`);
  return airtable;
};

const findAllAnswer = async () => {
  const base = dbConnection();
  return base("Answer").select().all();
};

const findAllQuestions = async () => {
  const base = dbConnection();
  return base("Question").select().all();
};

const findAllUsers = async () => {
  const base = dbConnection();
  return base("User").select().all();
};

const findOneAnswer = async (id: string) => {
  const base = dbConnection();
  return base("Answer").find(id);
};

const findOneQuestion = async (id: string) => {
  const base = dbConnection();
  return base("Question").find(id);
};

const findOneUser = async (id: string) => {
  const base = dbConnection();
  return base("User").find(id);
};

const createAnswer = async (data: Partial<Answer>, user, questionId: string) => {
  const base = dbConnection();
  const answer = await base("Answer").create(data);
  const question = await base("Question").find(questionId);
  await base("Answer").update(answer.id, {
    User: [user.id],
  });
  await base("Question").update(question.id, {
    Answer: [answer.id],
  });
  await base("User").update(user.id, {
    Answer: [answer.id],
  })
};

const createQuestion = async (data) => {
  const base = dbConnection();
  return base("Answer").create(data);
};

const createUser = async (data) => {
  const base = dbConnection();
  return base("User").create(data);
};

const updateAnswer = async (id: string, data: Partial<Answer>) => {
  const base = dbConnection();
  return base("Answer").update(id, data);
};

const updateQuestion = async (id: string, data) => {
  const base = dbConnection();
  return base("Question").update(id, data);
};

const updateUser = async (id: string, data) => {
  const base = dbConnection();
  return base("User").update(id, data);
};

const removeAnswer = async (id: string) => {
  const base = dbConnection();
  return base("Answer").destroy(id);
};

const removeQuestion = async (id: string) => {
  const base = dbConnection();
  return base("Question").destroy(id);
};

const removeUser = async (id: string) => {
  const base = dbConnection();
  return base("User").destroy(id);
};

export const AirtableService = {
  dbConnection,
  findAllAnswer,
  findAllQuestions,
  findAllUsers,
  findOneAnswer,
  findOneQuestion,
  findOneUser,
  createAnswer,
  createQuestion,
  createUser,
  updateAnswer,
  updateQuestion,
  updateUser,
  removeAnswer,
  removeQuestion,
  removeUser,
};
