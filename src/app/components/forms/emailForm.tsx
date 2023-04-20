import React, { FormEvent, MouseEvent, useState } from 'react';
import { SendinBlueService } from '../../../setup/services/sendinblue.service';

const EmailForm = () => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await SendinBlueService.sendEmail(to, subject, content);
      console.log('Email sent:', response);
      // Display a success message to the user
    } catch (error) {
      console.error('Error sending email:', error);
      // Display an error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        To:
        <input type="email" value={to} onChange={(event) => setTo(event.target.value)} />
      </label>
      <label>
        Subject:
        <input type="text" value={subject} onChange={(event) => setSubject(event.target.value)} />
      </label>
      <label>
        Content:
        <textarea value={content} onChange={(event) => setContent(event.target.value)} />
      </label>
      <button type="submit">Send</button>
    </form>
  );
};

export default EmailForm;
