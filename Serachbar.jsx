import React, { useContext, useEffect, useState } from 'react'
import { GoSearch } from "react-icons/go";
import ShopContext from '../context/ShopContext'
import { RxCross2 } from "react-icons/rx";
import { useLocation } from 'react-router-dom';

const Serachbar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)
    const [visible, setVisible] = useState(false)

    const location = useLocation()
    useEffect(() => {
        if (location.pathname.includes('collection')) {
            setVisible(true)

        } else {
            setVisible(false)
        }
    }, [location])



    return showSearch && visible ? (
        <div className="border-t border-b  bg-gray-50 text-center py-5">
            <div className="flex items-center justify-between w-full max-w-4xl mx-auto px-4">
                {/* Search Bar */}
                <div className="flex items-center border border-gray-400 px-4 py-2 rounded-full flex-grow mr-4">
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="flex-1 outline-none bg-inherit text-sm placeholder-gray-400 text-gray-700"
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <GoSearch className="text-gray-500" />
                </div>

                {/* Close Button */}
                <button
                    onClick={() => setShowSearch(false)}
                    className="p-2 bg-gray-400 text-white rounded-full hover:bg-gray-600 focus:outline-none"
                    aria-label="Close Search"
                >
                    <RxCross2 size={20} />
                </button>
            </div>
        </div>

    ) : null
}

export default Serachbar
