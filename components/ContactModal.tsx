import React from 'react';

const ContactModal = () => {
    return (
        <div className="w-full max-w-xl justify-center items-center">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="text" placeholder="Username" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password" type="password" placeholder="******************" />
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="w-full py-2 px-4 text-b-s text-center uppercase border-4 px-8 py-4 hover:bg-black hover:text-b-s_w hover:border-black rounded focus:outline-none focus:shadow-outline"
                        type="button">
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ContactModal;