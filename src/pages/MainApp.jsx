import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Homepage, About, Login } from '.';
import { Navbar } from '../../components/Navbar';
import { UserProvider } from '../../context/UserProvider';

export const MainApp = () => {
    return (
        <UserProvider>
            <div className="container pt-3">
                <Navbar />

                <h1>Main App</h1>

                <hr />

                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/*" element={<Navigate to="/login " />} />
                </Routes>
            </div>
        </UserProvider>
    );
};
