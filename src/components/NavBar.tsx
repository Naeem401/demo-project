
import React from 'react';
import { NavLink } from 'react-router-dom';

// Defining the component with React.FC
const NavBar: React.FC = () => {
    return (
        <nav className="flex justify-between px-12 py-8 items-center font-bold">
            <h2>Demo</h2>
            <ul className="flex gap-6">
                <NavLink to="/">Alom Vai</NavLink>
                <NavLink to="/ferdous">Ferdous Vai</NavLink>
                <NavLink to="/rabi">Rabi Vai</NavLink>
                <NavLink to="/samaira">Samaira Apo</NavLink>
                <NavLink to="/shuvankor">Shuvankor Vai</NavLink>
                <NavLink to="/naeem">Naeem</NavLink>
            </ul>
        </nav>
    );
};

export default NavBar;
