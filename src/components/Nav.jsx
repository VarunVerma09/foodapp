import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // For hamburger and close icons

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="shadow-md bg-white px-6 py-4 md:px-40 flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-bold text-gray-800">Travels</div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-6 text-gray-600 font-medium items-center">
                <li className="cursor-pointer hover:text-orange-500"><Link to="/destinations">Destinations</Link></li>
                <li className="cursor-pointer hover:text-orange-500"><Link to="/bookings">Bookings</Link></li>
                <li className="cursor-pointer hover:text-orange-500"><Link to="/contact">Contact Us</Link></li>
                <li>
                    <button className="ml-4 px-4 py-2 border border-gray-700 rounded-lg hover:bg-gray-100">
                        Sign up
                    </button>
                </li>
                <li>
                    <select className="ml-2 border rounded px-2 py-1">
                        <option value="en">EN</option>
                        <option value="fr">FR</option>
                        <option value="es">ES</option>
                    </select>
                </li>
            </ul>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden z-50">
                    <ul className="flex flex-col items-start px-6 py-4 gap-4 text-gray-700 font-medium">
                        <li className="w-full"><Link to="/destinations" onClick={() => setIsOpen(false)}>Destinations</Link></li>
                        <li className="w-full"><Link to="/bookings" onClick={() => setIsOpen(false)}>Bookings</Link></li>
                        <li className="w-full"><Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
                        <li className="w-full">
                            <button className="w-full px-4 py-2 border border-gray-700 rounded-lg hover:bg-gray-100">
                                Sign up
                            </button>
                        </li>
                        <li className="w-full">
                            <select className="w-full border rounded px-2 py-1">
                                <option value="en">EN</option>
                                <option value="fr">FR</option>
                                <option value="es">ES</option>
                            </select>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Nav;
