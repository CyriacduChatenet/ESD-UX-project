import React, { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react"

type Context = {
    user: any
    setUser: Dispatch<SetStateAction<any>>
}

const UserContext = createContext<Context>({
    user: {},
    setUser: () => {}
});

export const UserProvider = ({ children }: PropsWithChildren) => {
    const [user, setUser] = useState({});

    return (
        <UserContext.Provider value={{ user, setUser }}>
        {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext<Context>(UserContext);