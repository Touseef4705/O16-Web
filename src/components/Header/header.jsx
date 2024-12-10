import React from "react";

export default function Header() {
    return (
        <header className="flex justify-between items-center p-4 bg-white shadow-md">
            <div className="text-2xl font-bold text-blue-600">
                <img src="logo.svg.png" />
            </div>
            <nav className="space-x-6">
                <a href="/" className="text-gray-700 hover:text-blue-600">
                    Home
                </a>
                <a href="/" className="text-gray-700 hover:text-blue-600">
                    How It Works
                </a>
                <a href="/" className="text-gray-700 hover:text-blue-600">
                    Our Chefs
                </a>
                <a href="/" className="text-gray-700 hover:text-blue-600">
                    Book
                </a>
            </nav>
            <div className="space-x-4">
                <button className="text-blue-600 font-semibold">Log In</button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                    Sign Up
                </button>
            </div>
        </header>
    );
};


