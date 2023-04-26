import React, { ChangeEvent, useState } from "react";

import { SendinBlueService } from "../../../setup/services/sendinblue.service";
import { useScore } from "../../../setup/context/score.context";
import { useAnswer } from "../../../setup/context/answer.context";
import { Button } from "../button";

import check from "../../assets/images/check.png";
import perso1 from "../../assets/images/datafret-perso-51.png";

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
    maritime,
  } = useScore();

  const {
    expedition,
    setExpedition,
    spend,
    setSpend,
    transporter,
    setTransporter,
    international,
    setInternational,
    multiColis,
    setMultiColis,
    control,
    setControl,
  } = useAnswer();

  const [credentials, setCredentials] = useState({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSendData = async () => {
    await SendinBlueService.sendData(credentials, {
      expedition,
      spend,
      transporter,
      international,
      multiColis,
      control,
    });
  };

  const handleSubmit = async () => {
    try {
      await handleSendData();
      const response = await SendinBlueService.sendEmail(
        to,
        finalScore,
        defaultScore,
        region,
        multicolis,
        delivery,
        courier,
        express,
        messaging,
        excel,
        noControl,
        maritime
      );
      console.log("Email sent:", response);
      // Display a success message to the user
    } catch (error) {
      console.error("Error sending email:", error);
      // Display an error message to the user
    }
  };

  return (
    <div className="h-[60vh] lg:col-span-6 lg:grid lg:grid-cols-9">
      {window.innerWidth < 1024 && (
        <div className="w-full mb-8 lg:mb-0 flex justify-center items-center">
          <img src={check} alt="" />
        </div>
      )}
      {window.innerWidth < 1024 ? (
        <p className="text-[#022AB1] font-medium text-xl text-center lg:col-span-9">
          Félicitations ! Vous pouvez faire des économies grâce à DataFret !
        </p>
      ) : (
        <p className="text-[#022AB1] font-medium text-xl lg:col-span-9 lg:text-start">
          Félicitations ! <br /> Vous pouvez faire des économies grâce à
          DataFret !
        </p>
      )}
      {window.innerWidth < 1024 && (
        <p className="italic lg:text-center lg:col-span-9">
          Recevez notre rapport complet par mail
        </p>
      )}
      {window.innerWidth > 1024 && (
        <div className="lg:absolute lg:z-[-5] lg:bottom-40 lg:right-0 lg:w-96 lg:h-72 lg:flex lg:justify-center lg:items-center">
          <img src={perso1} alt="illus" />
        </div>
      )}
      <form
        action=""
        className="col-span-4 lg:col-span-7 row-span-1 flex flex-wrap"
      >
        <div className="bg-transparent row-span-1 flex flex-col justify-around items-center">
          <label className="text-[#022AB1] font-bold my-2 w-full lg:col-span-9">
            Nom de l'entreprise
            <input
              type="text"
              name="company"
              className="border-2 border-solid border-[#020B28] text-[#020B28] font-normal py-2 px-4 w-full rounded"
              placeholder="Entreprise"
              onChange={handleChange}
            />
          </label>
          <label className="text-[#022AB1] font-bold my-2  w-full lg:col-span-9">
            Poste occupé
            <input
              type="text"
              name="carrer"
              className="border-2 border-solid border-[#020B28] text-[#020B28] font-normal py-2 px-4 w-full rounded"
              placeholder="Directeur Logistique"
              onChange={handleChange}
            />
          </label>
          <label className="text-[#022AB1] font-bold my-2  w-full lg:col-span-9">
            Recevez notre rapport complet par mail
            <input
              type="email"
              name="email"
              value={to}
              className="border-2 border-solid border-[#020B28] text-[#020B28] font-normal py-2 px-4 w-full rounded"
              placeholder="john.doe@gmail.com"
              onChange={(event) => {
                setTo(event.target.value);
                handleChange(event);
              }}
            />
          </label>
        </div>
      </form>
      <br />
      <div className="fixed left-0 right-0 bottom-20 flex justify-around items-center">
        <Button type={"Previous"} />
        <Button type={"Envoyer"} handleClick={handleSubmit} />
      </div>
    </div>
  );
};

export default EmailForm;
