import React from "react";

function ChefBookingUI() {
    return (
        <div className="flex flex-col items-center text-left bg-gray-50 py-8">
            {/* Title Section */}
            <div className="max-w-full text-left mb-6 pl-0">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-left">
        Book <span className="text-blue-500">016 Labs</span><br/> for your{" "}
        <span className="text-blue-500">Dinner Party</span>
    </h1>
    <p className="text-gray-600 mt-4">
        We're providing the best Chef booking platform. Choose a menu and
        book your Chef instantly.
    </p>
            </div>


            {/* Options Section */}
            <div className="bg-white shadow-lg p-4 md:p-6 rounded-lg flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                {/* Select Region */}
                <div className="flex items-center space-x-2">
                    <span className="text-gray-500 text-xl">🌎</span>
                    <select
                        className="border border-gray-300 rounded-lg px-3 py-2 text-gray-600 focus:outline-none w-full md:w-auto"
                        defaultValue="Select region"
                    >
                        <option disabled>Select region</option>
                        <option>Al Shamal</option>
                        <option>Doha</option>
                    </select>
                </div>

                {/* Select Date */}
                <div className="flex items-center space-x-2">
                    <span className="text-gray-500 text-xl">📅</span>
                    <select
                        className="border border-gray-300 rounded-lg px-3 py-2 text-gray-600 focus:outline-none w-full md:w-auto"
                        defaultValue="Select date"
                    >
                        <option disabled>Select date</option>
                        <option>15 Jan - 20 Jan 2022</option>
                        <option>21 Jan - 25 Jan 2022</option>
                    </select>
                </div>

                {/* Select Persons */}
                <div className="flex items-center space-x-2">
                    <span className="text-gray-500 text-xl">👥</span>
                    <select
                        className="border border-gray-300 rounded-lg px-3 py-2 text-gray-600 focus:outline-none w-full md:w-auto"
                        defaultValue="Select persons"
                    >
                        <option disabled>Select persons</option>
                        <option>5</option>
                        <option>10</option>
                    </select>
                </div>

                {/* Arrow Button */}
                <button className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-blue-600">
                    →
                </button>
            </div>

            {/* Footer Section */}
            <div className="flex flex-col md:flex-row items-center justify-between mt-8 w-full max-w-4xl">
                {/* Customer Reviews */}
                <div className="flex items-center space-x-4">
                    <div className="flex -space-x-2">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="customer"
                            className="w-10 h-10 rounded-full border-2 border-white"
                        />
                        <img
                            src="https://via.placeholder.com/40"
                            alt="customer"
                            className="w-10 h-10 rounded-full border-2 border-white"
                        />
                        <img
                            src="https://via.placeholder.com/40"
                            alt="customer"
                            className="w-10 h-10 rounded-full border-2 border-white"
                        />
                        <img
                            src="https://via.placeholder.com/40"
                            alt="customer"
                            className="w-10 h-10 rounded-full border-2 border-white"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">Our happy customers</p>
                        <p className="text-lg font-bold">
                            ⭐ 4.7 <span className="text-gray-500">(8.2K Review)</span>
                        </p>
                    </div>
                </div>

                {/* Payment Methods */}
                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                    <p className="text-sm text-gray-600">We accept</p>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                        alt="Visa"
                        className="w-10"
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                        alt="Mastercard"
                        className="w-10"
                    />
                </div>
            </div>
        </div>
    );
}

export default ChefBookingUI;
