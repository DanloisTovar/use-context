import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Homepage, About, Login } from '../pages';
import { Navbar } from '../../components/Navbar';

export const Main = () => {
    return (
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
    );
};
