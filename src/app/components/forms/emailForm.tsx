import React, { ChangeEvent, useState } from "react";
import { SendinBlueService } from "../../../setup/services/sendinblue.service";
import { Button } from "../button";
import { useScore } from "../../../setup/context/score.context";

import check from "../../assets/images/check.png";

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

  const [credentials, setCredentials] = useState([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  }

  const handleSubmit = async () => {
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
      <div className="w-full mb-8 flex justify-center items-center">
        <img src={check} alt="" />
      </div>
      <p className="text-[#022AB1] font-medium text-xl text-center">
        Félicitations ! Vous pouvez faire des économies grâce à DataFret !
      </p>
      <p className="italic lg:text-center">Recevez notre rapport complet par mail</p>
      <form
        action=""
        className="col-span-4 lg:grid-col-span-9 row-span-1 flex flex-wrap"
      >
        <div className="bg-transparent row-span-1 flex flex-col justify-around items-center">
        <label className="text-[#022AB1] font-bold my-2 w-full">
            Nom de l'entreprise
            <input
              type="text"
              name="company"
              className="border-2 border-solid border-[#020B28] text-[#020B28] font-normal py-2 px-4 w-full"
              placeholder="Entreprise"
              onChange={handleChange}
            />
          </label>
        <label className="text-[#022AB1] font-bold my-2  w-full">
            Poste occupé
            <input
              type="text"
              name="company"
              className="border-2 border-solid border-[#020B28] text-[#020B28] font-normal py-2 px-4 w-full"
              placeholder="Directeur Logistique"
              onChange={handleChange}
            />
          </label>
          <label className="text-[#022AB1] font-bold my-2  w-full">
            Recevez notre rapport complet par mail
            <input
              type="email"
              value={to}
              className="border-2 border-solid border-[#020B28] text-[#020B28] font-normal py-2 px-4 w-full"
              placeholder="john.doe@gmail.com"
              onChange={(event) => setTo(event.target.value)}
            />
          </label>
        </div>
      </form>
      <br />
      <div className="fixed left-0 right-0 bottom-20 flex justify-around items-center lg:grid-col-span-9">
        <Button type={"Previous"} />
          <Button type={"Envoyer"} handleClick={handleSubmit} />
      </div>
    </div>
  );
};

export default EmailForm;
