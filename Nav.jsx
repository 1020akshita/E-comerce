import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/main-logo.png';
import { IoSearchOutline, IoCartOutline, IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import ShopContext from '../context/ShopContext';

const Nav = () => {
    const [visible, setVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => setIsOpen(true);
    const handleMouseLeave = () => setIsOpen(false);
    const toggleSidebar = () => setVisible(!visible);

    const { setShowSearch } = useContext(ShopContext)

    return (
        <>
            <nav className="flex items-center justify-between bg-cyan-700 py-2 px-4">
                <Link to='/'>
                    <img src={logo} alt="Logo" className="w-8 sm:w-12 md:w-16 lg:w-20" />
                </Link>

                <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `text-gray-700 transition-all duration-300 ease-in-out ${isActive ? "text-red-500 font-bold border-b-2 border-red-500" : ""}`}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/collection"
                        className={({ isActive }) =>
                            `text-gray-700 transition-all duration-300 ease-in-out ${isActive ? "text-red-500 font-bold border-b-2 border-red-500" : ""}`}
                    >
                        Collection
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `text-gray-700 transition-all duration-300 ease-in-out ${isActive ? "text-red-500 font-bold border-b-2 border-red-500" : ""}`}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `text-gray-700 transition-all duration-300 ease-in-out ${isActive ? "text-red-500 font-bold border-b-2 border-red-500" : ""}`}
                    >
                        Contact
                    </NavLink>
                </ul>

                <div className="flex items-center gap-6">
                    <IoSearchOutline onClick={() => setShowSearch(true)} className="text-xl sm:text-2xl md:text-3xl" />

                    {/* User Profile Dropdown */}
                    <div
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="relative"
                    >
                        <FaRegUser className="text-xl sm:text-2xl md:text-3xl cursor-pointer" />
                        {isOpen && (
                            <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md py-2">
                                <NavLink
                                    to="/profile"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    My Profile
                                </NavLink>
                                <NavLink
                                    to="/orders"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    Orders
                                </NavLink>
                                <NavLink
                                    to="/logout"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    Logout
                                </NavLink>
                            </div>
                        )}
                    </div>

                    {/* Cart Icon */}
                    <NavLink
                        to="/cart"
                        className="relative block px-4 py-2 text-gray-700 text-2xl"
                    >
                        <IoCartOutline className="text-xl sm:text-2xl md:text-3xl" />
                        <p className="absolute bottom-[-5px] left-[-5px] transform translate-x-1/2 -translate-y-1/2 text-xs bg-slate-400 rounded-full flex items-center justify-center h-5 w-5">10</p>
                    </NavLink>

                    {/* Menu Icon (for Mobile) */}
                    <IoMenuSharp onClick={toggleSidebar} className="cursor-pointer text-xl sm:text-2xl md:text-3xl sm:hidden" />
                </div>
            </nav>

            {/* Sidebar for Mobile */}
            <div
                className={`fixed inset-0 z-30 bg-gray-800 bg-opacity-50 sm:hidden transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={toggleSidebar}
            >
                <div
                    className={`fixed left-0 top-0 w-64 h-full bg-white shadow-lg p-6 transform transition-transform duration-300 ${visible ? 'translate-x-0' : '-translate-x-full'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-semibold">Menu</h2>
                        <IoCloseSharp onClick={toggleSidebar} className="cursor-pointer text-xl sm:text-2xl md:text-3xl " />
                    </div>
                    <nav className="space-y-4">
                        {["Home", "Collection", "About", "Contact"].map((item, index) => (
                            <NavLink
                                key={index}
                                to={`/${item.toLowerCase()}`}
                                className={({ isActive }) =>
                                    `block text-gray-700 text-lg hover:bg-gray-100 py-2 px-4 rounded transition-all duration-300 ease-in-out ${isActive ? "text-red-500 font-bold border-b-2 border-red-500" : ""}`}
                                onClick={toggleSidebar}
                            >
                                {item}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Nav;
