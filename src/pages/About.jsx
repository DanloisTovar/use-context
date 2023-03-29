import React, { useContext } from 'react';
import { userContext } from '../../context/Usercontext';

export const About = () => {
    const { id, nombre, email } = useContext(userContext);
    return (
        <>
            <h1>About</h1>

            <pre>{JSON.stringify({ id, nombre, email }, null, 3)}</pre>
        </>
    );
};
