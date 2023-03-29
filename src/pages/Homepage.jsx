import React, { useContext } from 'react';
import { userContext } from '../../context/Usercontext';

export const Homepage = () => {
    const { id, nombre, email } = useContext(userContext);
    return (
        <>
            <h1>Homepage!!</h1>

            <pre>{JSON.stringify({ id, nombre, email }, null, 3)}</pre>
        </>
    );
};
