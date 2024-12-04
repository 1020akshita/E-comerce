import React from 'react'

const Hero = () => {
    return (
        <>
            <section className="p-5  flex flex-col sm:flex-row  bg-gray-100  border border-gray-400">
                <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl px-6">
                    {/* Left Side - Content */}
                    <div className="flex flex-col justify-center text-left space-y-6 px-4 sm:px-8 lg:px-12">
                        {/* Bestseller Section */}
                        <div className="flex items-center gap-2">
                            <p className="bg-gray-700 w-8 sm:w-10 lg:w-12 h-[2px]"></p>
                            <p className="font-semibold text-sm sm:text-base lg:text-lg text-gray-700">Our Bestsellers</p>
                        </div>

                        {/* Heading */}
                        <h1 className="prata-regular text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 leading-snug sm:leading-normal lg:leading-relaxed">
                            Latest Arrivals
                        </h1>

                        {/* Shop Now Section */}
                        <div className="flex items-center gap-2">
                            <p className="font-semibold text-sm sm:text-base lg:text-lg text-gray-700">Shop Now</p>
                            <p className="bg-gray-700 w-8 sm:w-10 lg:w-12 h-[1px]"></p>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="flex items-center justify-center">
                        <img
                            src="https://img.freepik.com/free-photo/waistup-shot-charismatic-happy-carefree-charming-woman-yellow-tshirt-pointing-looking_1258-253302.jpg?t=st=1731568885~exp=1731572485~hmac=574dada8de3ebffbe44fee1468458bc2ced4023a100b49c2934474a4d4efd53c&w=1380"
                            alt="Technology"
                            className="rounded-lg shadow-lg w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
