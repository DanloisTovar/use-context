import React, { useContext } from 'react';
import { userContext } from '../../context/Usercontext';

export const Login = () => {
    const { setUser, id, nombre, email } = useContext(userContext);
    /* console.log({ id, nombre, email }); */
    return (
        <>
            <h1>Login!</h1>

            <h4>{nombre ? nombre : ''}</h4>

            <pre>{JSON.stringify({ id, nombre, email }, null, 3)}</pre>

            <button
                className="btn btn-primary"
                onClick={() =>
                    setUser({
                        id: 3,
                        nombre: 'Danlois Tovar',
                        email: 'danlois.tovar@gmail.com',
                    })
                }
            >
                establecer Usuario
            </button>
        </>
    );
};
