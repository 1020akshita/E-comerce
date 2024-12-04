import React from 'react'
import { MdCurrencyExchange } from "react-icons/md";
// import { MdLocalShipping } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
// import { MdSupportAgent } from "react-icons/md";
import { MdSupport } from "react-icons/md";

const OurPolicy = () => {
    return (
        <>
            <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
                <div>
                    <MdCurrencyExchange className="text-2xl sm:text-3xl md:text-4xl text-gray-600 mx-auto" />
                    <p className="font-semibold">Easy Exchange Policy</p>
                    <p className="text-gray-400">We offer hassle-free exchange policy</p>
                </div>
                <div>
                    <GiReturnArrow className="text-2xl sm:text-3xl md:text-4xl text-gray-600 mx-auto" />
                    <p className="font-semibold">7 days return policy</p>
                    <p className="text-gray-400">We provide 7 days return policy.</p>
                </div>
                <div>
                    <MdSupport className="text-2xl sm:text-3xl md:text-4xl text-gray-600 mx-auto" />
                    <p className="font-semibold">24/7 Customer Support</p>
                    <p className="text-gray-400">We're here to help you anytime</p>
                </div>
            </div>

        </>
    )
}

export default OurPolicy
