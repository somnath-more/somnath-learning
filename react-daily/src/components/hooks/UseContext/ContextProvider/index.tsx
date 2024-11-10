import React, { ReactNode, useState } from 'react';

interface CreateDataStoreProps {
    name: string;
    email: string;
    onForgot: (name: string, email: string) => void;
}

interface ContextProviderProps {
    children: ReactNode;
}

export const CreateDataStore = React.createContext<CreateDataStoreProps | undefined>(undefined);

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [name, setName] = useState("Somnath");
    const [email, setEmail] = useState("somnath@gmail.com");

    const onForgot = (name: string, email: string) => {
        console.log(`Forgot Password Request for ${name} with email ${email}`);
        setName(name);
        setEmail(email);
    };

    return (
        <CreateDataStore.Provider value={{ name, email, onForgot }}>
            {children}
        </CreateDataStore.Provider>
    );
};

export default ContextProvider;
