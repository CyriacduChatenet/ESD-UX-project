import { REACT_APP_SENDINBLUE_API_KEY } from '../../../env';

const sendEmail = async (to, subject, content) => {
  const apiKey = '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';
  const url = 'https://api.sendinblue.com/v3/smtp/email';

  const data = {
    sender: {
      name: 'Your Name',
      email: 'your_email@example.com',
    },
    to: [{ email: to }],
    subject: subject,
    htmlContent: content,
  };

  const headers = {
    'Content-Type': 'application/json',
    'api-key': apiKey,
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data),
  });

  return response;
};

export const SendinBlueService = {
    sendEmail,
};