import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/main-logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10 mt-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    {/* Left section */}
                    <div className="mb-6 sm:mb-0">
                        <Link to='/'>
                            <img src={logo} alt="Logo" className="w-8 sm:w-12 md:w-16 lg:w-20" />
                        </Link>
                    </div>

                    {/* Middle section */}
                    <div className="flex flex-col sm:flex-row mb-6 sm:mb-0">
                        <div className="sm:mr-6">
                            <h3 className="font-semibold">Quick Links</h3>
                            <ul className="text-gray-400 text-sm mt-2">
                                <li><NavLink to="/" activeClassName="text-white" className="hover:text-white">Home</NavLink></li>
                                <li><NavLink to="/about" activeClassName="text-white" className="hover:text-white">About</NavLink></li>
                                <li><NavLink to="/collection" activeClassName="text-white" className="hover:text-white">Collection</NavLink></li>
                                <li><NavLink to="/contact" activeClassName="text-white" className="hover:text-white">Contact</NavLink></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold">Contact Us</h3>
                            <ul className="text-gray-400 text-sm mt-2">
                                <li>123 Your Address, City</li>
                                <li>Email: contact@yourbrand.com</li>
                                <li>Phone: +123 456 7890</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right section (Social Icons) */}
                    <div>
                        <h3 className="font-semibold">Follow Us</h3>
                        <div className="flex gap-4 mt-2">
                            <a href="https://facebook.com" className="hover:text-blue-500">
                                <FaFacebook size={20} />
                            </a>
                            <a href="https://twitter.com" className="hover:text-blue-400">
                                <FaTwitter size={20} />
                            </a>
                            <a href="https://instagram.com" className="hover:text-pink-500">
                                <FaInstagram size={20} />
                            </a>
                            <a href="https://linkedin.com" className="hover:text-blue-700">
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="text-center mt-10 text-gray-400 text-sm">
                    <p>&copy; 2024 Your Brand. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
