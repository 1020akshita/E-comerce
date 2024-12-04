import React, { useState } from 'react'

const NewsLetterBox = () => {
    const [email, setEmail] = useState("")

    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log("Email submitted:");
        setEmail("");

    }
    return (
        <>
            <div className='text-center'>
                <p className='text-2xl font-medium text-gray-800'>Subscrib now and get 20% off.</p>
                <p className='mt-3 text-gray-400 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, doloremque.</p>
                <div className="flex justify-center items-center mt-3 bg-gray-100">
                    <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 border pl-3 rounded-lg shadow-sm bg-white">
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full sm:flex-1 outline-none py-3 text-sm sm:text-base text-gray-700 placeholder-gray-400"
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            placeholder="Enter Your Email"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-black text-white text-sm sm:text-base font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                            SUBSCRIBE
                        </button>
                    </form>
                </div>



            </div>
        </>
    )
}

export default NewsLetterBox
