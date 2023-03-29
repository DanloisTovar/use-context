import React from 'react';
import { userContext } from './Usercontext';

const user = {
    id: 1,
    nombre: 'danlois Tovar',
    email: 'danlois.tovar@gmail.com',
};

export const UserProvider = ({ children }) => {
    return (
        <userContext.Provider value={{ hola: 'Mundo!', ...user }}>
            {children}
        </userContext.Provider>
    );
};
