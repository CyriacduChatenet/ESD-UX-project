import { REACT_APP_SENDINBLUE_API_KEY } from "../../../env";
import { emailTemplate } from "../templates/email.template";

const sendEmail = async (to: string, finalScore: number, defaultScore: number, region: number, multicolis: number, delivery: number, courier: number,
  express: number,
  messaging: number,
  excel: number,
  noControl: number,
  maritime: number) => {
  const url = 'https://api.sendinblue.com/v3/smtp/email';

  const data = {
    sender: {
      name: 'Datafret',
      email: 'your_email@example.com',
    },
    to: [{ email: to }],
    subject: 'Datafret - Votre pourcentage d\'économie',
    htmlContent: `${emailTemplate(finalScore,defaultScore,region,multicolis,delivery,courier,express,messaging,excel,noControl, maritime)}`,
  };

  const headers = {
    'Content-Type': 'application/json',
    'api-key': REACT_APP_SENDINBLUE_API_KEY,
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data),
  });

  return response;
};

const sendData = async (credentials, answers) => {
  const data = {
    email: credentials.email,
    attributes: {
        carrer: credentials.carrer,
        company: credentials.company,
        expedition:`${answers.expedition}`,
        transport_cost: answers.spend,
        transport_number: answers.transporter,
        transport_international: answers.international,
        transport_multi_colis: answers.multiColis,
        control_type:`${answers.control}`,
    }
}
  const response = await fetch('https://api.sendinblue.com/v3/contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': REACT_APP_SENDINBLUE_API_KEY,
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

export const SendinBlueService = {
    sendEmail,
    sendData,
};