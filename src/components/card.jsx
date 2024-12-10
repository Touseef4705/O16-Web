import React from "react";

function Card() {
    return (
        <div className="container mx-auto px-4 py-40">
            <div className="flex justify-between items-center mb-8">
                {/* Heading Section */}
                <div className="text-left p-6  max-w-md mb-20">
                    <h2 className="text-5xl font-bold mb-10">
                        Our Most <br /><span className="text-blue-500">Popular Dishes</span><br /> this Month
                    </h2>
                    <a
                        href="#"
                        className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-600 transition duration-300"
                    >
                        See All
                    </a>
                </div>

                {/* Card Section */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 ml-8 w-full">
                    {/* Card 1 */}
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-all hover:shadow-xl">
                        <a href="#">
                            <img className="rounded-t-lg w-full" src="/card1.png" alt="Dish 1" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Noteworthy technology acquisitions 2021
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                            </p>
                            {/* Icon + Rating */}
                            <div className="flex items-center space-x-2 mt-4">
                                <a
                                    href="#"
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-full ransition duration-300"
                                >
                                    <img
                                        className="w-6 h-6 mr-2"
                                        src="/Ellipse 9006.png"  // Replace this with your image path
                                        alt="Icon"
                                    />
                                </a>

                                <p className="text-md text-gray-600 ">Marriot Head chef</p>
                                <span className="text-yellow-500 font-semibold">4.9</span>
                                <svg
                                    className="w-4 h-4 text-yellow-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        d="M10 15l-5.878 3.09 1.118-6.535-4.759-4.649 6.418-.476L10 1l2.101 5.454 6.418.476-4.759 4.649 1.118 6.535L10 15z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-all hover:shadow-xl">
                        <a href="#">
                            <img className="rounded-t-lg w-full" src="card2.png" alt="Dish 2" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Noteworthy technology acquisitions 2021
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                            </p>
                            {/* Icon + Rating */}
                            <div className="flex items-center space-x-2 mt-4">
                                <a
                                    href="#"
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-full  transition duration-300"
                                >
                                    <img
                                        className="w-6 h-6 mr-2"
                                        src="/Ellipse 9006.png"  // Replace this with your image path
                                        alt="Icon"
                                    />
                                </a>

                                <p className="text-md text-gray-600 ">Marriot Head chef</p>
                                <span className="text-yellow-500 font-semibold">4.9</span>
                                <svg
                                    className="w-4 h-4 text-yellow-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        d="M10 15l-5.878 3.09 1.118-6.535-4.759-4.649 6.418-.476L10 1l2.101 5.454 6.418.476-4.759 4.649 1.118 6.535L10 15z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-all hover:shadow-xl">
                        <a href="#">
                            <img className="rounded-t-lg w-full" src="card1.png" alt="Dish 3" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Noteworthy technology acquisitions 2021
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                            </p>
                            {/* Icon + Rating */}
                            <div className="flex items-center space-x-2 mt-4">
                                <a
                                    href="#"
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-full transition duration-300"
                                >
                                    <img
                                        className="w-6 h-6 mr-3"
                                        src="/Ellipse 9006.png"  // Replace this with your image path
                                        alt="Icon"
                                    />
                                </a>

                                <p className="text-md text-gray-600 ">Marriot Head chef</p>
                                <span className="text-yellow-500 font-semibold">4.9</span>
                                <svg
                                    className="w-4 h-4 text-yellow-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        d="M10 15l-5.878 3.09 1.118-6.535-4.759-4.649 6.418-.476L10 1l2.101 5.454 6.418.476-4.759 4.649 1.118 6.535L10 15z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
