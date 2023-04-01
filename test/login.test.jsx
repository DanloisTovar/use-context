import { fireEvent, render, screen } from '@testing-library/react';
import { Login } from '../src/pages/Login';
import { userContext } from '../context/Usercontext';

describe('testing Login', () => {
    const user = {
        id: 1,
        nombre: 'Danlois T',
        email: 'danlois.tovar@gmail.com',
    };
    test('Debe de mostrar el componente si el usuario!', () => {
        render(
            <userContext.Provider value={{}}>
                <Login />
            </userContext.Provider>,
        );

        const preTag = screen.getByLabelText('pre');

        /*        console.log(preTag.innerHTML); */

        expect(preTag.innerHTML).toBe(JSON.stringify({}));
    });

    test('Debe de llamar al setuser al dar click en el boton!', () => {
        const setUserMock = jest.fn();
        render(
            <userContext.Provider value={{ user, setUser: setUserMock }}>
                <Login />
            </userContext.Provider>,
        );

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(setUserMock).toHaveBeenCalledWith({
            email: 'danlois.tovar@gmail.com',
            id: 3,
            nombre: 'Danlois Tovar',
        });
    });
});
