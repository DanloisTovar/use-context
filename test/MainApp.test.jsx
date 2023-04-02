import { render, screen } from '@testing-library/react';
import { MainApp } from '../src/pages';
import { MemoryRouter } from 'react-router-dom';

describe('testing MainApp', () => {
    test('Debe de mosta el HomePage ', () => {
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>,
        );

        screen.debug();

        expect(screen.getByText('Home')).toBeTruthy();
        expect(screen.getByText('Homepage!!')).toBeTruthy();
        expect(screen.getByText('UseContext')).toBeTruthy();
    });

    test('Debe de mosta el LoginPage ', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>,
        );
        /*    screen.debug(); */

        expect(screen.getByText('Login')).toBeTruthy();
        expect(screen.getByText('Login!')).toBeTruthy();
    });

    test('Debe de mosta el About ', () => {
        render(
            <MemoryRouter initialEntries={['/about']}>
                <MainApp />
            </MemoryRouter>,
        );
        screen.debug();

        expect(screen.getByText('Home')).toBeTruthy();
        expect(screen.getAllByText('About')).toBeTruthy();
    });
});
