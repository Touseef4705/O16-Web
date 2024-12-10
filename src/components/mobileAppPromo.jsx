import React from "react";

function MobileAppPromo() {
    return (
        <div
    className="relative p-6 mx-auto bg-[url('/Rectangle.png')] bg-contain bg-no-repeat bg-center rounded-lg text-white flex flex-col lg:flex-row justify-center items-center lg:justify-between max-w-[90%] mt-20"
    style={{ height: "30rem" }}
>
{/* Bubble Decorations */}
<img
    src="/bubble.png"
    alt="Bubble 1"
    className="absolute bottom-10 left-10 w-20 sm:w-24 md:w-28 opacity-80"
/>

<img
    src="/bubble.png"
    alt="Bubble 3"
    className="absolute bottom-10 left-1/3 w-20 sm:w-24 md:w-28 opacity-80"
/>
<img
    src="/bubble.png"
    alt="Bubble 4"
    className="absolute bottom-16 left-2/3 w-20 sm:w-24 md:w-28 opacity-90 z-50"
/>

        



    {/* Mobile App Image */}
    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 sm:left-10 lg:left-16 xl:left-20 z-10">
        <img
            src="/mobile.png"
            alt="Mobile App"
            className="h-72 sm:h-80 lg:h-96 xl:h-[28rem]"
        />
    </div>

    {/* Text and Buttons */}
    <div className="text-center lg:text-left lg:ml-auto z-10 mt-6 lg:mt-0 lg:w-1/2 mx-32">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 lg:mb-6">
            Download our Mobile App
        </h2>
        <div className="flex justify-center lg:justify-start space-x-4">
            <a
                href="#"
                className="flex items-center bg-black px-6 py-3 rounded-lg"
            >
                <img
                    src="/google.png"
                    alt="Google Play"
                    className="h-8 mr-2"
                />
                <span className="text-sm font-medium">Google Play</span>
            </a>
            <a
                href="#"
                className="flex items-center bg-black px-6 py-3 rounded-lg"
            >
                <img
                    src="/appstore.png"
                    alt="App Store"
                    className="h-8 mr-2"
                />
                <span className="text-sm font-medium">App Store</span>
            </a>
        </div>
    </div>

    {/* Decorative Elements */}
    <img
        src="/pizza.png"
        alt="Pizza"
        className="absolute top-3 right-10 w-28 sm:w-28 lg:w-32 xl:w-36 transform rotate-[-10deg]"
    />
    <img
        src="/icecream.png"
        alt="Ice Cream"
        className="absolute bottom-0 right-5 sm:right-10 lg:-right-10 w-20 sm:w-24 lg:w-28"
    />
</div>

    );
}

export default MobileAppPromo;
