import React, { useState } from "react";
import { SendinBlueService } from "../../../setup/services/sendinblue.service";
import { Button } from "../button";
import { useScore } from "../../../setup/context/score.context";


const EmailForm = () => {
  const [to, setTo] = useState("");
  const {
    region,
    multicolis,
    courier,
    express,
    messaging,
    delivery,
    excel,
    noControl,
    defaultScore,
    finalScore,
  } = useScore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await SendinBlueService.sendEmail(
        to,
        finalScore,
        defaultScore,
        region,
        multicolis,
        delivery
      );
      console.log("Email sent:", response);
      // Display a success message to the user
    } catch (error) {
      console.error("Error sending email:", error);
      // Display an error message to the user
    }
  };

  return (
    <div className="lg:col-span-9 lg:ml-20 lg:mt-10 h-[60vh]">
      <p className="text-[#022AB1] font-medium text-xl text-center">
      Félicitations ! Vous pouvez faire des économies grâce à DataFret !
      </p>
      <p className="italic">Recevez notre rapport complet par mail</p>
      <form
        action=""
        className="col-span-4 lg:grid-col-span-9 row-span-1 flex flex-wrap"
      >
        <div className="bg-transparent row-span-1">
        <label>
          To:
          <input
            type="email"
            value={to}
            onChange={(event) => setTo(event.target.value)}
          />
        </label>
        <button type="submit">Send</button>
        </div>
      </form>
      <br />
      <div className="fixed left-0 right-0 bottom-20 flex justify-around items-center lg:grid-col-span-9">
        <Button type={"Previous"} />
        <Button type={"Envoyer"} />
      </div>
    </div>
  );
};

export default EmailForm;
