import React, { FormEvent, MouseEvent, useState } from 'react';
import { SendinBlueService } from '../../../setup/services/sendinblue.service';
import { Button } from '../button';
import { useScore } from '../../../setup/context/score.context';

const EmailForm = () => {
  const [to, setTo] = useState('');
  const { region, multicolis, courier, express, messaging, delivery, excel, noControl, defaultScore, finalScore } = useScore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await SendinBlueService.sendEmail(to, finalScore, defaultScore, region, multicolis, delivery);
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
      <button type="submit">Send</button>
    </form>
  );
};

export default EmailForm;
