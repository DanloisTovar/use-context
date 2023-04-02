import { render, screen } from '@testing-library/react';
import { Homepage } from '../src/pages/Homepage';
import { userContext } from '../context/Usercontext';
import { json } from 'react-router-dom';

describe('Testing en Homepage', () => {
    const user = {
        id: 1,
        nombre: 'Danlois T',
        email: 'danlois.tovar@gmail.com',
    };
    test('Debe mostar el componente sin el usuario! ', () => {
        render(
            <userContext.Provider value={{ id: null }}>
                <Homepage />
            </userContext.Provider>,
        );

        const preTag = screen.getByLabelText('pre');
        const resultado = preTag.innerHTML;
        /* console.log(resultado); */
        expect(preTag.innerHTML).toBe(resultado);

        /*   screen.debug(); */
    });

    test('Debe mostar el componente con el usuario! ', () => {
        render(
            <userContext.Provider value={user}>
                <Homepage />
            </userContext.Provider>,
        );

        const preTag = screen.getByLabelText('pre');
        const resultado = preTag.innerHTML;
        console.log(resultado);

        expect(preTag.innerHTML).toContain(resultado);

        /* screen.debug(); */
    });
});
