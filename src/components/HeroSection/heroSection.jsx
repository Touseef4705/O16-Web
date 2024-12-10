import React from "react";
import ChefBookingUI from "../chefBookingUi";

const HeroSection = () => {
    return (
        <section className="bg-gray-50 px-6 py-12 md:px-10 flex flex-col md:flex-row items-center justify-around">
            {/* Text and Booking UI */}
     
                <ChefBookingUI />

            {/* Hero Image */}
            <div className="w-full md:w-1/2 flex justify-end"> {/* Align image to the right */}
                <img
                    src="/headerImg.png"
                    alt="Hero"
                    className="rounded-lg max-w-full h-auto object-cover"
                />
            </div>
        </section>
    );
};

export default HeroSection;
