// src/layouts/Main.tsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

// Defining the component with React.FC (React Function Component)
const Main: React.FC = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    );
};

export default Main;
