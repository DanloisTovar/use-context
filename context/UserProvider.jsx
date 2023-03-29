import React, { useState } from 'react';
import { userContext } from './Usercontext';

/* const user = {
    id: 1,
    nombre: 'danlois Tovar',
    email: 'danlois.tovar@gmail.com',
}; */

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState();
    return (
        <userContext.Provider value={{ ...user, setUser }}>
            {children}
        </userContext.Provider>
    );
};
