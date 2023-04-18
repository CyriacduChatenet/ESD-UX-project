import React, { ChangeEvent, FC, useState } from "react";
import { AirtableService } from "../../setup/services/airtable.service";
import { useUser } from "../../setup/context/user.context";

export const UserForm: FC = () => {
    const [credentials, setCredentials] = useState({});
    const { setUser } = useUser();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await AirtableService.createUser(credentials);
        console.log(response);
        setUser(response);
    };

    return (
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="Email" placeholder="user email" onChange={handleChange} />
            <input type="submit" value={'Create user'} />
        </form>
    );
};